"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Lock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { useMounted } from "@/hooks/useMounted";

export default function CheckoutPage() {
    const { items, getTotalPrice } = useCartStore();
    const mounted = useMounted();
    const [isSuccess, setIsSuccess] = useState(false);

    if (!mounted) return null;

    if (items.length === 0 && !isSuccess) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-black mb-4">Your cart is empty</h1>
                <p className="text-gray-500 mb-8">Add some products to your cart before checking out.</p>
                <Link href="/shop" className="bg-primary text-white px-8 py-3 rounded-xl font-bold">
                    Start Shopping
                </Link>
            </div>
        );
    }

    const subtotal = getTotalPrice();
    const shipping = 50;
    const tax = subtotal * 0.15;
    const total = subtotal + shipping + tax;

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
        useCartStore.getState().clearCart();
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="container mx-auto px-4 py-24 text-center max-w-lg"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h1 className="text-4xl font-black mb-4">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order #NC-{(Math.random() * 10000).toFixed(0)} is being processed and will be shipped soon.
                </p>
                <div className="space-y-4">
                    <Link href="/shop" className="block w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
                        Continue Shopping
                    </Link>
                    <Link href="/" className="block w-full text-gray-500 font-medium hover:text-dark">
                        Return to Home
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="mb-8">
                <Link href="/cart" className="flex items-center text-sm font-medium text-gray-500 hover:text-dark">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
                </Link>
                <h1 className="text-3xl md:text-4xl font-black mt-4">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Shipping Details */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
                            Shipping Information
                        </h2>
                        <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">First Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">Last Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Email Address</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Full Address</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="123 Luxury St, Suite 400" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">City</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="New York" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">Postal Code</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="10001" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">2</span>
                            Payment Method
                        </h2>
                        <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <CreditCard className="w-6 h-6 text-primary" />
                                <span className="font-bold text-dark">Mock Credit Card</span>
                            </div>
                            <div className="w-5 h-5 rounded-full border-4 border-primary"></div>
                        </div>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <Lock className="w-4 h-4" /> Secure payment processing via encrypted gateway.
                        </p>
                    </div>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:sticky lg:top-24 h-fit"
                >
                    <div className="bg-dark text-white p-8 rounded-3xl shadow-xl">
                        <h2 className="text-2xl font-black mb-8">Order Summary</h2>
                        <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600">
                            {items.map((item) => (
                                <div key={item.product.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10">
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm line-clamp-1">{item.product.title}</p>
                                            <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-white/10 pt-8">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-black pt-4 border-t border-white/10">
                                <span>Total</span>
                                <span className="text-accent">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            form="checkout-form"
                            type="submit"
                            className="w-full bg-accent text-white py-5 rounded-2xl font-black text-lg mt-8 shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Pay & Place Order
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
