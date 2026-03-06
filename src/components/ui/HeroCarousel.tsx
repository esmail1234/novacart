"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BANNERS } from "@/data/assetManifest";

export const HeroCarousel = () => {
    const banners = BANNERS;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden bg-gray-900 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Desktop Image */}
                    <div className="hidden md:block relative w-full h-full">
                        <Image
                            src={banners[currentIndex].desktop}
                            alt={banners[currentIndex].title}
                            fill
                            className="object-cover"
                            priority={currentIndex === 0}
                        />
                    </div>

                    {/* Mobile Image */}
                    <div className="block md:hidden relative w-full h-full">
                        <Image
                            src={banners[currentIndex].mobile}
                            alt={banners[currentIndex].title}
                            fill
                            className="object-cover"
                            priority={currentIndex === 0}
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                key={`text-${currentIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="max-w-2xl"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
                                >
                                    {banners[currentIndex].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="text-lg md:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md"
                                >
                                    {banners[currentIndex].subtitle}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="/shop"
                                            className="flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-primary/30"
                                        >
                                            Shop Collection <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="/about"
                                            className="flex justify-center items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
                                        >
                                            Our Story
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-accent w-10" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
