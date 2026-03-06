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
                <h1 className="text-6xl font-black mb-12 text-center text-gray-900 tracking-tighter">Frequently Asked <span className="text-primary italic border-b-4 border-primary/20 pb-2">Questions</span></h1>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/20 transition-all group">
                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors">{faq.q}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-lg">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
