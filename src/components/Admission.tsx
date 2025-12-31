'use client';
import React from 'react';
import { ArrowRight, PhoneCall, Users, ClipboardCheck, Rocket } from 'lucide-react';

const Admission = () => {
    const steps = [
        {
            icon: PhoneCall,
            title: 'Enquiry',
            description: 'Contact us via phone, email, or visit our center to learn more about our programs'
        },
        {
            icon: Users,
            title: 'Counseling',
            description: 'Discuss your child\'s needs and our teaching methodology with our counselors'
        },
        {
            icon: ClipboardCheck,
            title: 'Batch Allocation',
            description: 'Get assigned to appropriate batch based on class and syllabus requirements'
        },
        {
            icon: Rocket,
            title: 'Start Learning',
            description: 'Begin your journey towards academic excellence with MSJ Educational Academy'
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Join Us</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Admission Process
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Simple and transparent enrollment in just 4 easy steps
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E3CF80] via-[#557EAE] to-[#73826E]"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    {/* Step Card */}
                                    <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#E3CF80] hover:shadow-xl transition-all duration-300 group">
                                        {/* Step Number/Icon */}
                                        <div className="relative mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#557EAE] to-[#73826E] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="text-white" size={32} />
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="hidden lg:block absolute top-1/2 -right-12 transform">
                                                    <ArrowRight className="text-[#E3CF80]" size={24} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-[#100A06] mb-3 text-center">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed text-center">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-[#557EAE]/5 to-[#E3CF80]/5 rounded-2xl p-8 lg:p-12 border border-[#E3CF80]/20">
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#100A06] mb-4">
                            Ready to Begin Your Child&apos;s Success Journey?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Enroll now and give your child the advantage of quality education with personalized attention
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-[#E3CF80] hover:bg-[#C9A85D] text-[#100A06] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;
