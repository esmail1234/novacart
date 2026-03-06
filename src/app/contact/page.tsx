"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-5xl font-black mb-6">Contact <span className="text-primary">Us</span></h1>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        Have a question about an order or just want to say hi? Our team is available 24/7 to assist you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dark">Email Support</h3>
                                <p className="text-gray-500">support@novacart.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dark">Phone</h3>
                                <p className="text-gray-500">+1 (555) 800-NOVA</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dark">Headquarters</h3>
                                <p className="text-gray-500">777 Premium Way, Lux City, CA 90210</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl"
                >
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-primary/5 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                            <input type="email" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-primary/5 transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                            <textarea rows={4} className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-primary/5 transition-all resize-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-dark text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Send Message <Send className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
