"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { ProductCard } from "@/components/ui/ProductCard";
import { InfoSection } from "@/components/ui/InfoSection";
import { mockProducts } from "@/data/products";

export default function Home() {
  // Get trending and new products
  const featuredProducts = mockProducts.filter(p => p.isPopular).slice(0, 8);
  const newArrivals = mockProducts.filter(p => p.isNew).slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Info Stats & Features */}
      <InfoSection />

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>TRENDING NOW</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-4">
                Our Featured Collection
              </h2>
              <p className="text-gray-500 text-lg">
                Discover our hand-picked selection of premium essentials designed for modern living.
              </p>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
            <Image
              src={newArrivals[0]?.image || "/assets/banner/img1.webp"}
              alt="New Arrival"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-6 leading-tight">
                New Arrivals <br /> Perfected For You.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stay ahead of the curve with our freshest drops. Each piece is tested for quality and aesthetic appeal before reaching your hands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {newArrivals.slice(0, 2).map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 relative rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark line-clamp-1">{product.title}</h4>
                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop?filter=new"
              className="inline-flex items-center justify-center gap-3 bg-dark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl max-w-fit"
            >
              Discover Newness <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-primary to-indigo-600 -z-10 opacity-90" />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
              Ready to Upgrade?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join thousands of satisfied customers who have already elevated their daily essentials with NovaCart.
            </p>
            <Link href="/shop" className="mt-4 bg-white text-primary px-12 py-6 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4">
              Start Shopping
              <ArrowRight className="w-6 h-6 font-bold" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
