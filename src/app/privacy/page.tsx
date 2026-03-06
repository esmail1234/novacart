"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-black mb-10">Privacy Policy</h1>
                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with our support team. This includes your name, email, shipping address, and payment information.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">2. How We Use Your Data</h2>
                        <p>Your data is used to process orders, improve our services, and send you relevant updates about your purchases. We never sell your personal information to third parties.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your data, including SSL encryption for all transactions and secure storage of sensitive information.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
