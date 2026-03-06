"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);
        // Mock register
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setTimeout(() => {
                window.location.href = '/login';
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
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-dark mb-2 tracking-tight">Join NovaCart</h1>
                    <p className="text-gray-500">Experience the future of premium shopping</p>
                </div>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"
                        >
                            <CheckCircle className="w-8 h-8" />
                        </motion.div>
                        <p className="font-bold text-dark">Registration Successful!</p>
                        <p className="text-sm text-gray-500">Taking you to login page...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-red-50 text-red-500 p-3 rounded-xl text-xs font-bold border border-red-100"
                            >
                                {error}
                            </motion.div>
                        )}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Confirm Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    required
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-dark font-medium"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full bg-dark text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        Create Account <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-8">
                            Already have an account?{" "}
                            <Link href="/login" className="font-bold text-primary hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
