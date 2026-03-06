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
                <h1 className="text-5xl font-black mb-8">About <span className="text-primary">NovaCart</span></h1>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p className="text-xl font-medium text-dark italic">
                        "NovaCart was born from a simple vision: to bridge the gap between premium design and accessible luxury."
                    </p>
                    <p>
                        We believe that the products you use every day should be more than just functional—they should be an extension of your lifestyle. Our team of curators travels the globe to find items that meet our rigorous standards for quality, sustainability, and aesthetic excellence.
                    </p>
                    <p>
                        From the latest in high-performance electronics to handcrafted home decor, every item in our collection is chosen with a specific purpose: to elevate your daily experience.
                    </p>
                    <h2 className="text-3xl font-bold text-dark pt-8">Our Commitment</h2>
                    <p>
                        We are committed to transparency, quality, and exceptional customer service. When you shop with NovaCart, you're not just buying a product; you're joining a community of individuals who value the finer details.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
