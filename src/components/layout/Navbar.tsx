"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, Search, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { useMounted } from "@/hooks/useMounted";
import { LOGO_PATH } from "@/data/assetManifest";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const openCart = useCartStore((state) => state.openCart);
    const getTotalItems = useCartStore((state) => state.getTotalItems);

    const mounted = useMounted();
    const totalItems = mounted ? getTotalItems() : 0;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Categories", href: "/categories" },
        { name: "Deals", href: "/deals" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">

                {/* Logo & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden p-2 text-dark hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <Link href="/" className="flex items-center gap-2 relative group">
                        <Image
                            src={LOGO_PATH || "/assets/logo/logo.svg"}
                            alt="NovaCart Logo"
                            width={140}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Icons: Search, Login, Cart */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100">
                        <Search className="w-5 h-5" />
                    </button>

                    <Link
                        href="/login"
                        className="hidden sm:flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-full hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <User className="w-4 h-4" />
                        <span>Login</span>
                    </Link>

                    <button
                        onClick={openCart}
                        className="p-2 text-gray-600 hover:text-primary transition-colors relative rounded-full hover:bg-gray-100"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {totalItems > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold shadow-sm"
                            >
                                {totalItems > 99 ? '99+' : totalItems}
                            </motion.span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-black text-gray-900 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-4 mt-4 text-sm font-bold text-white bg-primary rounded-xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
                            >
                                <User className="w-4 h-4" />
                                <span>Login / Register</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
