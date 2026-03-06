"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating to product detail
        addItem(product, 1);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                        </span>
                    )}
                    {product.isPopular && (
                        <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                            HOT
                        </span>
                    )}
                </div>

                {/* Quick Add Button - Appears on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-white/95 backdrop-blur-md text-gray-900 font-bold py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all transform active:scale-95"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Quick Add
                    </button>
                </div>
            </Link>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                    </div>
                </div>

                <Link href={`/products/${product.id}`} className="group-hover:text-primary transition-colors block">
                    <h3 className="font-bold text-gray-900 line-clamp-1 mb-1 text-lg tracking-tight">{product.title}</h3>
                </Link>

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                        <span className="text-2xl font-black text-indigo-600 tracking-tighter">${product.price.toFixed(2)}</span>
                    </div>
                    {product.originalPrice > product.price && (
                        <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
