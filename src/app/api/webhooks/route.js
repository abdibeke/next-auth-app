import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);
    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`✅ Webhook received: ID=${id}, Type=${eventType}`);
    console.log("📦 Full payload:", JSON.stringify(evt.data, null, 2));

    // Handle specific event types
    switch (eventType) {
      case "user.created":
        console.log("👤 A new user was created.");
        break;
      case "user.updated":
        console.log("♻️ A user was updated.");
        break;
      case "user.deleted":
        console.log("🚫 A user was deleted.");
        break;
      default:
        console.log(`ℹ️ Unhandled event type: ${eventType}`);
        break;
    }

    return new Response("Webhook processed", { status: 200 });
  } catch (err) {
    console.error("❌ Error verifying webhook:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
