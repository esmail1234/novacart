"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

import { useCartStore } from "@/store/useCartStore";
import { useMounted } from "@/hooks/useMounted";

export default function CartPage() {
    const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();
    const mounted = useMounted();

    if (!mounted) return null;

    const subtotal = getTotalPrice();
    const shipping = subtotal > 50 ? 0 : 10;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-8">
                Shopping Cart
            </h1>

            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                        <ShoppingBag className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-3">Your cart is currently empty</h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Looks like you haven&apos;t added anything to your cart yet. Explore our products and find something you love.
                    </p>
                    <Link
                        href="/shop"
                        className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                    >
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Cart Items List */}
                    <div className="flex-1 space-y-6">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50/50 border-b border-gray-100 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-3 text-center">Quantity</div>
                                <div className="col-span-2 text-right">Price</div>
                                <div className="col-span-1"></div>
                            </div>

                            <ul className="divide-y divide-gray-100">
                                {items.map((item, index) => (
                                    <motion.li
                                        key={item.product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 flex flex-col md:grid md:grid-cols-12 gap-4 items-center group"
                                    >
                                        {/* Product Details (Mobile & Desktop) */}
                                        <div className="col-span-6 flex items-center gap-4 w-full">
                                            <Link href={`/products/${item.product.id}`} className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                                                <Image
                                                    src={item.product.image}
                                                    alt={item.product.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    sizes="112px"
                                                />
                                            </Link>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                                                    {item.product.category}
                                                </span>
                                                <Link href={`/products/${item.product.id}`}>
                                                    <h3 className="font-bold text-dark text-lg line-clamp-2 hover:text-primary transition-colors">
                                                        {item.product.title}
                                                    </h3>
                                                </Link>
                                                <p className="text-sm font-medium text-gray-500 mt-1 md:hidden">
                                                    ${item.product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="col-span-3 flex justify-between md:justify-center items-center w-full mt-4 md:mt-0">
                                            <span className="md:hidden text-sm font-medium text-gray-500">Quantity</span>
                                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-dark hover:bg-white rounded shadow-sm disabled:opacity-50 disabled:shadow-none transition-all"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-12 text-center font-bold text-dark">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-dark hover:bg-white rounded shadow-sm transition-all"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Total Price */}
                                        <div className="col-span-2 flex justify-between md:justify-end items-center w-full mt-2 md:mt-0 font-bold text-dark text-lg">
                                            <span className="md:hidden text-sm font-medium text-gray-500">Total</span>
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </div>

                                        {/* Remove Action */}
                                        <div className="col-span-1 flex justify-end w-full mt-2 md:mt-0">
                                            <button
                                                onClick={() => removeItem(item.product.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors flex items-center gap-2"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                                <span className="md:hidden text-sm font-medium">Remove</span>
                                            </button>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 text-primary">
                            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm font-medium">Secure checkout guaranteed. Your payment information is encrypted and safe.</p>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 lg:p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-dark mb-6">Order Summary</h3>

                            <div className="space-y-4 text-sm lg:text-base">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({getTotalItems()} items)</span>
                                    <span className="font-semibold text-dark">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Shipping</span>
                                    <span className="font-semibold text-dark">
                                        {shipping === 0 ? (
                                            <span className="text-emerald-500">Free</span>
                                        ) : (
                                            `$${shipping.toFixed(2)}`
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Tax</span>
                                    <span className="font-semibold text-dark">${tax.toFixed(2)}</span>
                                </div>

                                <div className="border-t border-gray-100 pt-4 mt-6">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-lg font-bold text-dark">Total</span>
                                        <span className="text-2xl font-black text-dark">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 text-right">USD inclusive of taxes</p>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="mt-6">
                                <Link
                                    href="/shop"
                                    className="block text-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
