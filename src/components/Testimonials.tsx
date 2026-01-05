'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';
import Link from 'next/link';


const Testimonials = () => {
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

                {/* Google Reviews Link Button */}
                <div className="flex justify-center mb-12">
                    <Link
                        href="https://share.google/Fnne9zO0j4qe2rCkq"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#100A06] text-[#E3CF80] rounded-full font-bold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-md"
                    >
                        <Star className="fill-[#E3CF80]" size={18} />
                        Read More Reviews on Google
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {mockData.testimonials.map((testimonial: any) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;