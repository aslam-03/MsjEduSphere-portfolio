'use client';
import React from 'react';
import { Target, Heart, TrendingUp, Shield } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Target,
            title: 'Concept Clarity',
            description: 'Deep understanding of fundamentals with practical applications'
        },
        {
            icon: Heart,
            title: 'Personal Mentoring',
            description: 'Individual attention to each student\'s unique learning needs'
        },
        {
            icon: TrendingUp,
            title: 'Exam Confidence',
            description: 'Regular practice and assessment to boost exam performance'
        },
        {
            icon: Shield,
            title: 'Proven Track Record',
            description: '7+ years of excellence with consistently high results'
        }
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">About Us</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Welcome to MSJ Educational Academy
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[#557EAE]/5 to-[#E3CF80]/5 rounded-2xl p-8 border border-[#E3CF80]/20">
                            <h3 className="text-2xl font-bold text-[#100A06] mb-4">
                                Empowering Students Since 2018
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                MSJ Educational Academy is a premier tuition center in Coimbatore dedicated to providing comprehensive academic support for students from Class 1 to 12.
                                We focus on building strong conceptual foundations, enhancing exam confidence, and offering personalized mentoring to every student.
                            </p>
                        </div>

                        <div className="bg-[#E3CF80]/10 rounded-xl p-6 border-l-4 border-[#E3CF80]">
                            <p className="text-xl font-semibold text-[#100A06] italic">
                                “Learn! Try! Succeed!”
                            </p>
                            <p className="text-gray-600 mt-2 font-medium">
                                - Our Motto
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#E3CF80] hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#557EAE] to-[#73826E] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#100A06] mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
