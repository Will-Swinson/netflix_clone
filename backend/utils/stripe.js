import stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

// Give strip the stripe secret key

// Create Items Map for stripe
const subscriptionPlans = new Map([
  [1, { name: "Mobile", priceInCents: 600 }],
  [2, { name: "Basic", priceInCents: 800 }],
  [3, { name: "Standard", priceInCents: 1000 }],
  [4, { name: "Premium", priceInCents: 1200 }],
]);
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req) => {
  console.log("HELLO FROM SESSION");
  const lineItems = req.body.items.map((item) => {
    // Grab plan from subscriptionPlans map
    const subscriptionPlan = subscriptionPlans.get(item.id);

    // Format for stripe items
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: subscriptionPlan.name,
        },
        unit_amount: subscriptionPlan.priceInCents,
      },
      quantity: item.quantity,
    };
  });

  // Create session
  const session = await stripeInstance.checkout.sessions.create({
    // Payment method types
    payment_method_types: ["card"],
    // Subscription mode
    mode: "payment",
    // Line items
    line_items: lineItems,
    // Success and cancel urls
    success_url: "http://localhost:5173",
    cancel_url: "http://localhost:5173",
  });

  return session;
};

export default createCheckoutSession;
