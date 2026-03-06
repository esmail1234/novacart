"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import { LOGO_PATH } from "@/data/assetManifest";

const footerLinks = {
    shop: [
        { name: "All Products", href: "/shop" },
        { name: "New Arrivals", href: "/shop?filter=new" },
        { name: "Best Sellers", href: "/shop?filter=popular" },
        { name: "Deals", href: "/deals" },
    ],
    support: [
        { name: "Shipping Policy", href: "/shipping" },
        { name: "Returns & Refunds", href: "/returns" },
        { name: "Support Center", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
    ],
    company: [
        { name: "Our Story", href: "/about" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Sustainability", href: "/about" },
    ]
};

export const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative h-8 w-32">
                            <Image
                                src={LOGO_PATH || "/assets/logo/logo.svg"}
                                alt="NovaCart"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Elevating your lifestyle through curated premium products. Experience the best in tech, home, and fashion.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <Link key={i} href="https://social.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 border border-white/10">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Shop</h4>
                        <ul className="space-y-4">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-primary transition-all text-sm"
                                />
                            </div>
                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-500 font-medium">
                        {footerLinks.company.map(link => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 font-medium tracking-wider">
                        © {new Date().getFullYear()} NOVACART. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};
