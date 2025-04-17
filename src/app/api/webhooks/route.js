import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);

    if (!evt || typeof evt !== "object" || !evt.data) {
      console.error("❌ Invalid webhook structure:", evt);
      return new Response("Invalid payload structure", { status: 400 });
    }

    const { data, type: eventType } = evt;

    const id = data?.id ?? "unknown";

    console.log(`✅ Webhook received: ID=${id}, Type=${eventType}`);
    console.log("📦 Full payload:", JSON.stringify(data, null, 2));

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
    console.error("❌ Error creating or updating user:", err);
    return new Response("Webhook processing failed", { status: 400 });
  }
}
