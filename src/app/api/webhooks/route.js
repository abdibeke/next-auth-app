import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { createOrUpdateUser, deleteUser } from '../../../lib/actions/user';

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('❌ Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400,
    });
  }

  const { id } = evt?.data;
  const eventType = evt?.type;

  console.log(`Webhook Event: ID = ${id}, Type = ${eventType}`);
  console.log('Full Webhook Body:', JSON.stringify(payload, null, 2));  // Logging full payload

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, first_name, last_name, image_url, email_addresses, username } = evt?.data;

    // Log some key user details
    console.log(`User Data: ID = ${id}, Name = ${first_name} ${last_name}, Email = ${email_addresses[0]?.email}`);

    try {
      await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );
      return new Response('User is created or updated', { status: 200 });
    } catch (error) {
      console.log('❌ Error creating or updating user:', error);
      return new Response('Error occurred', { status: 400 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt?.data;
    try {
      await deleteUser(id);
      return new Response('User is deleted', { status: 200 });
    } catch (error) {
      console.log('❌ Error deleting user:', error);
      return new Response('Error occurred', { status: 400 });
    }
  }

  return new Response('', { status: 200 });
}
