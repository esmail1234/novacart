"use client";

import { motion } from "framer-motion";

export default function ReturnsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-black mb-10">Returns & Refunds</h1>
                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">30-Day Money-Back Guarantee</h2>
                        <p>Not completely satisfied? Return your item within 30 days of receipt for a full refund or exchange. Items must be in original packaging and condition.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">How to Start a Return</h2>
                        <p>Simply log in to your account, navigate to "Orders," select the item you wish to return, and follow the instructions to print your prepaid shipping label.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
