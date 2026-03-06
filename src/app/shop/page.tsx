"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { mockProducts, categories } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

type SortOption = 'popular' | 'newest' | 'price-low' | 'price-high';

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Calculate max price for the slider
    const maxPrice = useMemo(() => {
        return Math.ceil(Math.max(...mockProducts.map(p => p.price), 1000));
    }, []);

    const [priceRange, setPriceRange] = useState<number>(maxPrice);
    const [minRating, setMinRating] = useState<number>(0);
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...mockProducts];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query)
            );
        }

        // Category filter
        if (selectedCategory !== 'All') {
            result = result.filter((p) => p.category === selectedCategory);
        }

        // Price filter
        result = result.filter((p) => p.price <= priceRange);

        // Rating filter
        if (minRating > 0) {
            result = result.filter((p) => p.rating >= minRating);
        }

        // Sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            case 'popular':
            default:
                result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.rating - a.rating);
                break;
        }

        return result;
    }, [searchQuery, selectedCategory, priceRange, minRating, sortBy]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    } as const;

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-dark mb-2">
                        Shop All
                    </h1>
                    <p className="text-gray-500 max-w-xl">
                        Discover our curated collection of premium products designed to elevate your everyday lifestyle.
                    </p>
                </div>

                <div className="relative w-full md:w-80 lg:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm shadow-sm"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Mobile Filter Toggle */}
                <button
                    className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl font-medium text-dark shadow-sm"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    <Filter className="w-5 h-5" />
                    {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                </button>

                {/* Filters Sidebar */}
                <AnimatePresence>
                    {(isFilterOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                        <motion.aside
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="w-full lg:w-64 flex-shrink-0 lg:block overflow-hidden lg:overflow-visible"
                        >
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-8 sticky top-24">
                                <div className="flex items-center gap-2 font-bold text-lg border-b border-gray-100 pb-4">
                                    <SlidersHorizontal className="w-5 h-5" />
                                    Filters
                                </div>

                                {/* Categories */}
                                <div>
                                    <h3 className="font-semibold text-dark mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {[{ id: 'All', label: 'All' }, ...categories].map((category) => (
                                            <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={category.label}
                                                    checked={selectedCategory === category.label}
                                                    onChange={() => setSelectedCategory(category.label)}
                                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                                                />
                                                <span className={`text-sm ${selectedCategory === category.label ? 'text-primary font-medium' : 'text-gray-600 group-hover:text-dark'}`}>
                                                    {category.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-dark">Price</h3>
                                        <span className="text-sm font-medium text-primary">Up to ${priceRange}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={maxPrice}
                                        step="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>$0</span>
                                        <span>${maxPrice}</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div>
                                    <h3 className="font-semibold text-dark mb-4">Minimum Rating</h3>
                                    <div className="space-y-2">
                                        {[4, 3, 2, 1].map((rating) => (
                                            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    value={rating}
                                                    checked={minRating === rating}
                                                    onChange={() => setMinRating(rating)}
                                                    className="w-4 h-4 text-accent bg-gray-100 border-gray-300 focus:ring-accent"
                                                />
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                        </svg>
                                                    ))}
                                                    <span className="text-sm text-gray-600 ml-1">& up</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Reset Filters */}
                                <button
                                    onClick={() => {
                                        setSelectedCategory('All');
                                        setPriceRange(maxPrice);
                                        setMinRating(0);
                                        setSearchQuery('');
                                    }}
                                    className="w-full py-2.5 text-sm font-medium text-gray-600 hover:text-dark hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Product Grid Header & Content */}
                <div className="flex-1 flex flex-col min-h-[500px]">
                    {/* Active Filters & Sorting */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <p className="text-gray-600 font-medium">
                            Showing <span className="font-bold text-dark">{filteredProducts.length}</span> results
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                                    className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-10 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm cursor-pointer"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    {filteredProducts.length > 0 ? (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
                        >
                            {filteredProducts.map((product) => (
                                <motion.div key={product.id} variants={itemVariants}>
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl border border-gray-100 shadow-sm w-full h-full">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">No products found</h3>
                            <p className="text-gray-500 max-w-sm">
                                We couldn&apos;t find anything matching your current filters. Try adjusting them or clear your search.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setPriceRange(maxPrice);
                                    setMinRating(0);
                                    setSearchQuery('');
                                }}
                                className="mt-6 px-6 py-2.5 bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary/20 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
