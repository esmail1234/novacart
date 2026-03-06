"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, Star, ArrowLeft, Truck, ShieldCheck, RefreshCw } from "lucide-react";

import { mockProducts } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { ProductCard } from "@/components/ui/ProductCard";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const product = mockProducts.find((p) => p.id === id);
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);

    // Reset state when product changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveImage(0);

        setQuantity(1);
        // Scroll to top when changing products
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        notFound();
    }

    const relatedProducts = mockProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addItem(product, quantity);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Breadcrumb / Back Navigation */}
            <div className="mb-8">
                <Link
                    href="/shop"
                    className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Shop
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Product Images Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={product.thumbnails[activeImage] || product.image}
                                    alt={product.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                            {product.isNew && (
                                <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    NEW ARRIVAL
                                </span>
                            )}
                            {product.isPopular && (
                                <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    BEST SELLER
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    {product.thumbnails.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                            {product.thumbnails.map((thumb, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === index
                                        ? 'border-primary ring-2 ring-primary/20 ring-offset-1'
                                        : 'border-transparent hover:border-gray-300'
                                        }`}
                                >
                                    <Image
                                        src={thumb}
                                        alt={`${product.title} thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">
                                {product.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-sm font-bold bg-yellow-50 text-yellow-700 border border-yellow-100 px-3 py-1.5 rounded-full">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{product.rating}</span>
                                <span className="text-yellow-600/60 font-medium ml-1">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                            {product.title}
                        </h1>

                        <div className="text-4xl font-black text-indigo-600 mb-8 tracking-tighter">
                            ${product.price.toFixed(2)}
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-6 mt-auto">
                        {/* Quantity and Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-2 h-14 w-full sm:w-auto">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg shadow-sm transition-all border border-transparent hover:border-gray-200"
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-bold text-gray-900 text-lg">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg shadow-sm transition-all border border-transparent hover:border-gray-200"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToCart}
                                className="flex-1 h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart - ${(product.price * quantity).toFixed(2)}
                            </motion.button>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-8">
                            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                                <Truck className="w-6 h-6 text-secondary mb-2" />
                                <span className="text-sm font-semibold text-dark">Free Shipping</span>
                                <span className="text-xs text-gray-500">On orders over $50</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                                <span className="text-sm font-semibold text-dark">2 Year Warranty</span>
                                <span className="text-xs text-gray-500">Full coverage</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl text-center">
                                <RefreshCw className="w-6 h-6 text-accent mb-2" />
                                <span className="text-sm font-semibold text-dark">30 Days Return</span>
                                <span className="text-xs text-gray-500">Money back guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="border-t border-gray-100 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                            You Might Also Like
                        </h2>
                        <Link href="/shop" className="text-primary font-medium hover:underline">
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
