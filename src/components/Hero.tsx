'use client';
import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFFFFD] via-white to-[#E3CF80]/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in">
                        <div className="inline-block">
                            <span className="bg-[#E3CF80]/20 text-[#C9A85D] px-4 py-2 rounded-full text-sm font-semibold">
                                Since 2018 – 7+ Years of Excellence
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-[#100A06] leading-tight">
                            Complete Academic Support for{' '}
                            <span className="text-[#557EAE] relative whitespace-nowrap">
                                Classes 1–12
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4 Q150 8 300 4" stroke="#E3CF80" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed lg:whitespace-nowrap">
                            CBSE & Tamil Nadu State Board | Personal Attention | Proven Results
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="bg-[#E3CF80] hover:bg-[#C9A85D] text-[#100A06] font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Enroll Now
                            </Button>
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="border-2 border-[#557EAE] text-[#557EAE] hover:bg-[#557EAE] hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                            >
                                Contact Us
                            </Button>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 pt-8">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#557EAE]/10 p-3 rounded-lg">
                                    <Users className="text-[#557EAE]" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-2xl text-[#100A06]">500+</div>
                                    <div className="text-sm text-gray-600">Students</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#E3CF80]/20 p-3 rounded-lg">
                                    <Award className="text-[#C9A85D]" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-2xl text-[#100A06]">100%</div>
                                    <div className="text-sm text-gray-600">Pass Rate</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#73826E]/10 p-3 rounded-lg">
                                    <GraduationCap className="text-[#73826E]" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-2xl text-[#100A06]">7+</div>
                                    <div className="text-sm text-gray-600">Years</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual Element */}
                    <div className="relative hidden lg:flex w-full h-full min-h-[500px] items-center justify-center">
                        <DotLottieReact
                            src="/animation/Learning.lottie"
                            loop
                            autoplay
                            className="w-[110%] h-auto max-w-none scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
