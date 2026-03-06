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
                    <h1 className="text-6xl font-black mb-6 tracking-tighter text-gray-900">Contact <span className="text-primary italic">Us</span></h1>
                    <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">
                        Have a question about an order or just want to say hi? Our team is available 24/7 to assist you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-200">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Email Support</h3>
                                <p className="text-gray-600 font-bold">support@novacart.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-200">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Phone</h3>
                                <p className="text-gray-600 font-bold">+1 (555) 800-NOVA</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-200">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">Headquarters</h3>
                                <p className="text-gray-600 font-bold">777 Premium Way, Lux City, CA 90210</p>
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
                            <label className="text-sm font-black text-gray-900 ml-1 uppercase tracking-widest">Full Name</label>
                            <input type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-300 bg-white outline-none focus:ring-4 focus:ring-primary/5 transition-all text-gray-900 font-bold placeholder:text-gray-400 shadow-sm" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-900 ml-1 uppercase tracking-widest">Email Address</label>
                            <input type="email" className="w-full px-4 py-4 rounded-2xl border border-gray-300 bg-white outline-none focus:ring-4 focus:ring-primary/5 transition-all text-gray-900 font-bold placeholder:text-gray-400 shadow-sm" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-900 ml-1 uppercase tracking-widest">Message</label>
                            <textarea rows={4} className="w-full px-4 py-4 rounded-2xl border border-gray-300 bg-white outline-none focus:ring-4 focus:ring-primary/5 transition-all resize-none text-gray-900 font-bold placeholder:text-gray-400 shadow-sm" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10">
                            Send Message <Send className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
