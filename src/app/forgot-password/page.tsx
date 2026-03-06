"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowLeft, Send } from "lucide-react";

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl"
            >
                <div className="mb-8">
                    <Link href="/login" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
                    </Link>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Reset Password</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Enter your email and we&apos;ll send you a link to reset your password.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 ml-1 uppercase tracking-widest">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                required
                                type="email"
                                placeholder="name@example.com"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-gray-900 font-bold placeholder:text-gray-400 shadow-sm"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        Send Reset Link <Send className="w-5 h-5" />
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
