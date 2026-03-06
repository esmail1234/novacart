"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-6xl font-black mb-10 tracking-tighter">About <span className="text-primary italic">NovaCart</span></h1>
                <div className="prose prose-xl max-w-none text-gray-600 space-y-8">
                    <p className="text-2xl font-black text-gray-900 italic border-l-4 border-primary pl-6 leading-relaxed">
                        &ldquo;NovaCart was born from a simple vision: to bridge the gap between premium design and accessible luxury.&rdquo;
                    </p>
                    <p>
                        We believe that the products you use every day should be more than just functional—they should be an extension of your lifestyle. Our team of curators travels the globe to find items that meet our rigorous standards for quality, sustainability, and aesthetic excellence.
                    </p>
                    <p>
                        From the latest in high-performance electronics to handcrafted home decor, every item in our collection is chosen with a specific purpose: to elevate your daily experience.
                    </p>
                    <h2 className="text-4xl font-black text-gray-900 pt-10 tracking-tight">Our Commitment</h2>
                    <p>
                        We are committed to transparency, quality, and exceptional customer service. When you shop with NovaCart, you&apos;re not just buying a product; you&apos;re joining a community of individuals who value the finer details.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
