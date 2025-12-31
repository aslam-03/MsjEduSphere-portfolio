'use client';
import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Testimonials</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        What Parents & Students Say
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Real experiences from our satisfied community
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {mockData.testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#E3CF80] relative overflow-hidden"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute -top-4 -right-4 opacity-5">
                                <Quote size={120} className="text-[#557EAE]" />
                            </div>

                            <CardContent className="p-8 relative">
                                {/* Stars */}
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-[#E3CF80] text-[#E3CF80]" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 leading-relaxed mb-6 italic">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author Info */}
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="font-bold text-[#100A06] mb-1">{testimonial.name}</p>
                                    <p className="text-sm text-[#557EAE]">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
