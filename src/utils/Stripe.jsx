import axios from "axios";

export async function handleStripePayment(e) {
  try {
    e.preventDefault();
    const items = [{ id: 1, quantity: 1 }];

    const response = await axios.post("/api/stripe/charge", { items });

    console.log(response.data);

    const url = response.data.url;
    console.log(url);
    window.location = url;
  } catch (e) {
    console.log(e);
  }
}
