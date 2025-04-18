import { createOrUpdateUser, deleteUser } from '../../../lib/action/user';


export async function POST(req) {
  try {
    const evt = await req.json();

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`✅ Webhook received: ID=${id}, Type=${eventType}`);
    console.log("📦 Full payload:", JSON.stringify(evt.data, null, 2));

    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, firstName, lastName, image_url, email_addresses, username } = evt.data;

      try {
        await createOrUpdateUser({
          id,
          firstName,
          lastName,
          image_url,
          email_addresses,
          username,
        });
        console.log("✅ User created/updated successfully");
        return new Response("User created/updated successfully", { status: 200 });
      } catch (error) {
        console.error("❌ Error creating or updating user:", error);
        return new Response("Error processing user", { status: 400 });
      }
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;

      try {
        await deleteUser(id);
        console.log("🗑️ User deleted successfully");
        return new Response("User deleted successfully", { status: 200 });
      } catch (error) {
        console.error("❌ Error deleting user:", error);
        return new Response("Error deleting user", { status: 400 });
      }
    }

    console.log(`⚠️ Unhandled event type: ${eventType}`);
    return new Response("Event type not handled", { status: 200 });
  } catch (err) {
    console.error("❌ Error processing webhook:", err);
    return new Response("Error processing webhook", { status: 400 });
  }
}
