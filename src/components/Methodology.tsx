'use client';
import React from 'react';
import { Users, Target, CheckCircle, BarChart, MessageSquare, LucideIcon } from 'lucide-react';
import { mockData } from '../mock';

const Methodology = () => {
    const icons: LucideIcon[] = [Users, Target, CheckCircle, BarChart, MessageSquare];

    return (
        <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Our Approach</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Teaching Methodology
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        A systematic approach to ensure every student reaches their full potential
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline connector for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E3CF80] via-[#557EAE] to-[#73826E]"></div>

                    <div className="space-y-12">
                        {mockData.methodology.map((method: { id: number; title: string; description: string }, index: number) => {
                            const Icon = icons[index] || Users; // Fallback to Users if index out of bounds
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={method.id}
                                    className={`relative lg:grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                                >
                                    {/* Content Card */}
                                    <div
                                        className={`bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#E3CF80] hover:shadow-lg transition-all duration-300 ${!isEven ? 'lg:col-start-2' : ''}`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-gradient-to-br from-[#557EAE] to-[#73826E] rounded-xl flex items-center justify-center">
                                                    <Icon className="text-white" size={24} />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-[#100A06] mb-2">{method.title}</h3>
                                                <p className="text-gray-700 leading-relaxed">{method.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#E3CF80] rounded-full border-4 border-white shadow-md z-10">
                                        <span className="absolute inset-0 bg-[#E3CF80] rounded-full animate-ping opacity-75"></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
