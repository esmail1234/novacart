"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-black mb-10">Terms of Service</h1>
                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using NovaCart, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our platform.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">2. User Accounts</h2>
                        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">3. Product Availability</h2>
                        <p>All products are subject to availability. We reserve the right to limit quantities or discontinue products at any time without prior notice.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
