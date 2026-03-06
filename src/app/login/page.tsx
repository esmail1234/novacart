"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        }, 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                <div className="text-center mb-10 relative">
                    <h1 className="text-3xl font-black text-dark mb-2 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500">Sign in to your account to continue</p>
                </div>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"
                        >
                            <CheckCircle className="w-8 h-8" />
                        </motion.div>
                        <p className="font-bold text-dark">Login Successful!</p>
                        <p className="text-sm text-gray-500">Redirecting to homepage...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-gray-700">Password</label>
                                <Link href="/forgot-password" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-dark transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Sign In <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-8">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="font-bold text-primary hover:underline">
                                Create Account
                            </Link>
                        </p>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
