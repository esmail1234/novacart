"use client";

import { motion } from "framer-motion";
import { Tag, Sparkles, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DealsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden mb-16"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4" />
                        LIMITED TIME OFFERS
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The Season <br /> Of Deals.</h1>
                    <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
                        Save up to 60% on our most-wanted premium electronics and home essentials. New deals added every 24 hours.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 font-bold bg-dark/20 px-6 py-3 rounded-2xl">
                            <Clock className="w-5 h-5" />
                            Ends in: 12h 45m 03s
                        </div>
                        <Link href="/shop" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl">
                            Browse Deals
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] flex flex-col justify-between items-start group">
                    <div>
                        <Tag className="w-10 h-10 text-primary mb-6 group-hover:rotate-12 transition-transform" />
                        <h2 className="text-3xl font-black mb-4">First Purchase?</h2>
                        <p className="text-gray-500 mb-8">Use code <span className="text-primary font-black">NOVA20</span> for an extra 20% off your first luxury order.</p>
                    </div>
                    <button className="text-dark font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Get Coupon <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="bg-dark text-white p-10 rounded-[2.5rem] flex flex-col justify-between items-start group">
                    <div>
                        <Sparkles className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                        <h2 className="text-3xl font-black mb-4">Refer a Friend</h2>
                        <p className="text-gray-400 mb-8">Give $50, get $50. When your friend makes their first purchase over $200.</p>
                    </div>
                    <button className="text-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Learn More <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
