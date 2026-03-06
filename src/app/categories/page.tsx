"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box } from "lucide-react";
import { mockProducts } from "@/data/products";

export default function CategoriesPage() {
    // Extract unique categories
    const categories = Array.from(new Set(mockProducts.map((p) => p.category))).map(catName => {
        const product = mockProducts.find(p => p.category === catName);
        return {
            name: catName,
            id: catName.toLowerCase().replace(/\s+/g, '-'),
            image: product?.image || "/assets/banner/img1.webp",
            count: mockProducts.filter(p => p.category === catName).length
        };
    });

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-2xl mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-dark mb-6 tracking-tight">
                    Explore Our <span className="text-primary">Categories</span>
                </h1>
                <p className="text-gray-500 text-lg">
                    Browse our curated collections and find the perfect products for your lifestyle, from premium tech to luxury home essentials.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={`/shop?category=${category.name}`}
                            className="group block relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-gray-100 shadow-xl"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-75"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute inset-x-8 bottom-8 text-white">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                    <Box className="w-4 h-4" />
                                    <span>{category.count} Products</span>
                                </div>
                                <h3 className="text-3xl font-black mb-4">{category.name}</h3>
                                <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                                    Shop Now <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
