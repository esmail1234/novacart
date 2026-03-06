"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-black mb-10">Shipping Policy</h1>
                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">Delivery Options</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="font-bold mb-2">Standard Shipping</h3>
                                <p className="text-sm">3-5 business days. Free for orders over $150.</p>
                            </div>
                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <h3 className="font-bold text-primary mb-2">Express Delivery</h3>
                                <p className="text-sm">1-2 business days. Premium tracking included.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">International Shipping</h2>
                        <p>We currently ship to over 50 countries worldwide. International shipping rates and times vary by location and will be calculated at checkout.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
