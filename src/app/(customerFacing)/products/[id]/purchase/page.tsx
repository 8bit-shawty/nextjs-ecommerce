import prisma from "@/db/prisma"
import { notFound } from "next/navigation"
import Stripe from 'stripe'
import { CheckoutForm } from "./components/CheckoutForm"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function PurchasePage({ params }: { params: { id: string } }) {
    const { id } = await params; // Move destructuring inside the function

    const product = await prisma.product.findUnique({
        where: { id }
    });

    if (!product) return notFound();

    const paymentIntent = await stripe.paymentIntents.create({
        amount: product.priceInCents,
        currency: "USD",
        metadata: { productId: product.id }
    });

    if (!paymentIntent.client_secret) {
        throw new Error("Stripe failed to create payment intent");
    }

    return <CheckoutForm product={product} clientSecret={paymentIntent.client_secret} />;
}
