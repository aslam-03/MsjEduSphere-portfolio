'use client';
import React from 'react';
import { Users, Target, CheckCircle, BarChart, MessageSquare, BookOpen, Baby, Brain, Lightbulb, UserCheck, Microscope } from 'lucide-react';
import { mockData } from '../mock';

const Methodology = () => {
    // We will separate the methodology by categories: Play School, School, Competitive

    const categories = [
        {
            id: 'playSchool',
            title: 'Play School',
            data: mockData.methodology.playSchool,
            icon: Baby,
            color: 'text-[#E3CF80]',
            bgColor: 'bg-[#E3CF80]/10',
            lineGradient: 'from-[#E3CF80] via-[#E3CF80] to-[#E3CF80]'
        },
        {
            id: 'school',
            title: 'Academic Coaching',
            data: mockData.methodology.school,
            icon: BookOpen,
            color: 'text-[#557EAE]',
            bgColor: 'bg-[#557EAE]/10',
            lineGradient: 'from-[#557EAE] via-[#557EAE] to-[#557EAE]'
        },
        {
            id: 'competitive',
            title: 'NEET / JEE',
            data: mockData.methodology.competitive,
            icon: Target,
            color: 'text-[#73826E]',
            bgColor: 'bg-[#73826E]/10',
            lineGradient: 'from-[#73826E] via-[#73826E] to-[#73826E]'
        }
    ];

    // Helper to get diverse icons if not provided in item
    const getFallbackIcon = (index: number) => {
        const icons = [Lightbulb, CheckCircle, BarChart, MessageSquare, UserCheck, Brain, Microscope];
        return icons[index % icons.length];
    };

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

                <div className="space-y-20">
                    {categories.map((category) => (
                        <div key={category.id} className="relative">
                            {/* Category Header */}
                            <div className="flex items-center justify-center mb-12">
                                <div className={`p-3 rounded-full mr-4 ${category.bgColor}`}>
                                    <category.icon className={category.color} size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-[#100A06]">{category.title}</h3>
                            </div>

                            {/* Timeline Container */}
                            <div className="relative">
                                {/* Timeline connector for desktop */}
                                <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${category.lineGradient}`}></div>

                                <div className="space-y-12">
                                    {category.data.map((method: any, index: number) => {
                                        const Icon = getFallbackIcon(index); // Use diverse icons for the steps
                                        const isEven = index % 2 === 0;

                                        return (
                                            <div
                                                key={`${category.id}-${method.id}`}
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
                                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#E3CF80] shadow-md z-10 items-center justify-center">
                                                    <div className="w-2.5 h-2.5 bg-[#E3CF80] rounded-full"></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
