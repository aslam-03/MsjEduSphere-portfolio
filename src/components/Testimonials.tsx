'use client';
import React, { useState } from 'react';
import { Star, Quote, Baby, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Testimonials = () => {
    const [filter, setFilter] = useState<'all' | 'school' | 'playschool' | 'competitive'>('all');

    const filters = [
        { id: 'all', label: 'All Reviews' },
        { id: 'playschool', label: 'Play School', icon: Baby },
        { id: 'school', label: 'Academic Coaching', icon: BookOpen },
        { id: 'competitive', label: 'NEET / JEE', icon: Target }
    ];

    const filteredTestimonials = filter === 'all'
        ? mockData.testimonials
        : mockData.testimonials.filter((t: any) => t.category === filter);

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Testimonials</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        What Parents & Students Say
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Real experiences from our satisfied community
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((f) => {
                        const Icon = f.icon;
                        const isActive = filter === f.id;
                        return (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id as any)}
                                className={`flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                                        ? 'bg-[#100A06] text-[#E3CF80] border-[#100A06]'
                                        : 'bg-white text-gray-600 border-gray-300 hover:border-[#E3CF80]'
                                    }`}
                            >
                                {Icon && <Icon size={16} className="mr-2" />}
                                {f.label}
                            </button>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {filteredTestimonials.length > 0 ? (
                        filteredTestimonials.map((testimonial: any) => (
                            <Card
                                key={testimonial.id}
                                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#E3CF80] relative overflow-hidden h-full"
                            >
                                {/* Quote Icon Background */}
                                <div className="absolute -top-4 -right-4 opacity-5">
                                    <Quote size={120} className="text-[#557EAE]" />
                                </div>

                                <CardContent className="p-8 relative flex flex-col h-full">
                                    {/* Stars */}
                                    <div className="flex space-x-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-[#E3CF80] text-[#E3CF80]" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-gray-700 leading-relaxed mb-6 italic flex-grow">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    {/* Author Info */}
                                    <div className="border-t border-gray-200 pt-4 mt-auto">
                                        <p className="font-bold text-[#100A06] mb-1">{testimonial.name}</p>
                                        <p className="text-sm text-[#557EAE]">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-gray-500 py-10">
                            No testimonials found for this category yet.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
