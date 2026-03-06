"use client";

import { motion } from "framer-motion";

const faqs = [
    { q: "How can I track my order?", a: "Once your order ships, you will receive an email with a tracking number and a link to our carrier's tracking page." },
    { q: "Do you offer international shipping?", a: "Yes, NovaCart ships to most countries worldwide. Rates are calculated at checkout." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay." },
    { q: "Can I change or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placement. Please contact support immediately." }
];

export default function FAQsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-black mb-10 text-center">Frequently Asked <span className="text-primary">Questions</span></h1>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-dark mb-3">{faq.q}</h3>
                            <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
