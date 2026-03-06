"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useMounted } from '@/hooks/useMounted';

export function CartDrawer() {
    const mounted = useMounted();
    const {
        items,
        isCartOpen,
        closeCart,
        removeItem,
        updateQuantity,
        getTotalPrice,
        getTotalItems
    } = useCartStore();

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <ShoppingBag className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-black text-gray-900 tracking-tight">Your Cart</h2>
                                <span className="bg-gray-100 text-gray-900 text-xs font-black px-3 py-1 rounded-full border border-gray-200">
                                    {getTotalItems()}
                                </span>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors border border-transparent hover:border-gray-200"
                                aria-label="Close cart"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                        <ShoppingBag className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900">Your cart is empty</h3>
                                        <p className="text-gray-500 font-medium mt-1">Looks like you haven&apos;t added anything yet.</p>
                                    </div>
                                    <button
                                        onClick={closeCart}
                                        className="mt-4 px-6 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <ul className="space-y-6">
                                    {items.map((item) => (
                                        <li key={item.product.id} className="flex gap-4">
                                            {/* Product Image */}
                                            <div className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                                                <Image
                                                    src={item.product.image}
                                                    alt={item.product.title}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex flex-col flex-1 justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="font-bold text-gray-900 text-sm line-clamp-2 pr-4 text-left leading-snug">
                                                            {item.product.title}
                                                        </h4>
                                                        <span className="font-black text-indigo-600 whitespace-nowrap text-base">
                                                            ${(item.product.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1">{item.product.category}</p>
                                                </div>

                                                <div className="flex items-center justify-between mt-3">
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1 border border-gray-100">
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                            disabled={item.quantity <= 1}
                                                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-dark hover:bg-white rounded shadow-sm disabled:opacity-50 disabled:shadow-none transition-all"
                                                        >
                                                            <Minus className="w-3.5 h-3.5" />
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-dark hover:bg-white rounded shadow-sm transition-all"
                                                        >
                                                            <Plus className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeItem(item.product.id)}
                                                        className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer / Summary */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-black text-gray-900 pt-3 border-t border-gray-200">
                                        <span>Total</span>
                                        <span className="text-indigo-600">${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/cart"
                                        onClick={closeCart}
                                        className="flex items-center justify-center py-4 bg-white border border-gray-200 text-gray-900 font-black rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        View Cart
                                    </Link>
                                    <Link
                                        href="/checkout"
                                        onClick={closeCart}
                                        className="flex items-center justify-center py-4 bg-gradient-to-r from-primary to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25 active:scale-[0.98]"
                                    >
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
