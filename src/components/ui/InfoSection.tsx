import { Users, Star, Award, ShieldCheck, Truck, Clock } from "lucide-react";

const stats = [
    { value: "50k+", label: "Happy Customers", icon: Users },
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "10+", label: "Years Experience", icon: Award },
];

const features = [
    {
        title: "Premium Quality",
        description: "Every product is crafted with the highest quality materials.",
        icon: Award,
    },
    {
        title: "Secure Payments",
        description: "Your transactions are protected by industry-leading encryption.",
        icon: ShieldCheck,
    },
    {
        title: "Fast Shipping",
        description: "Get your orders delivered to your doorstep in record time.",
        icon: Truck,
    },
    {
        title: "24/7 Support",
        description: "Our customer service team is always here to help you.",
        icon: Clock,
    },
];

export const InfoSection = () => {
    return (
        <section className="py-20 bg-background border-b border-gray-100">
            <div className="container mx-auto px-4">

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-sm border border-gray-50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                                <stat.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-4xl font-black text-dark mb-2 tracking-tight">{stat.value}</h3>
                            <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Quality Features */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-dark mb-6 tracking-tight">Why Choose NovaCart</h2>
                    <p className="text-gray-600 text-lg">
                        We don&apos;t just sell products; we deliver an experience. Here&apos;s why thousands of shoppers trust us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-50 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-secondary" />
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
