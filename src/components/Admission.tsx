'use client';
import React, { useState } from 'react';
import { ArrowRight, PhoneCall, Users, ClipboardCheck, Rocket, Baby, BookOpen, Target, GraduationCap } from 'lucide-react';

const Admission = () => {
    const [activeTab, setActiveTab] = useState<'playSchool' | 'school' | 'competitive'>('school');

    const tabs = [
        { id: 'playSchool', label: 'Play School', icon: Baby },
        { id: 'school', label: 'Academic Coaching', icon: BookOpen },
        { id: 'competitive', label: 'NEET / JEE', icon: Target },
    ];

    const admissionDetails = {
        playSchool: {
            title: "Play School Admission",
            eligibility: "Age: 2.5 – 5 Years",
            description: "Simple and friendly process for our youngest learners.",
            steps: [
                { icon: PhoneCall, title: "Parent Enquiry", desc: "Visit campus or call us" },
                { icon: Users, title: "Interaction", desc: "Friendly interaction with the child" },
                { icon: ClipboardCheck, title: "Registration", desc: "Fill simple forms" },
                { icon: Rocket, title: "Welcome Day", desc: "Start journey with joy" }
            ]
        },
        school: {
            title: "Academic Coaching (1-12)",
            eligibility: "Classes: 1 – 12 (All Boards)",
            description: "Streamlined enrollment for academic support.",
            steps: [
                { icon: PhoneCall, title: "Enquiry", desc: "Contact for subject details" },
                { icon: Users, title: "Assessment", desc: "Basic understanding check" },
                { icon: ClipboardCheck, title: "Batch Allocation", desc: "Based on class & board" },
                { icon: Rocket, title: "Classes Begin", desc: "Regular schedule starts" }
            ]
        },
        competitive: {
            title: "NEET / JEE Admission",
            eligibility: "Class 11, 12 & Repeaters",
            description: "Merit-based admission for aspiring professionals.",
            steps: [
                { icon: PhoneCall, title: "Registration", desc: "Apply for entrance counseling" },
                { icon: GraduationCap, title: "Scholarship Test", desc: "Merit-based evaluation" },
                { icon: ClipboardCheck, title: "Counseling", desc: "Stream & goal setting" },
                { icon: Rocket, title: "Intensive Batch", desc: "Focused preparation starts" }
            ]
        }
    };

    const currentDetails = admissionDetails[activeTab];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Join Us</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Admission Process
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Your gateway to quality education and success
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                                        ? 'bg-[#E3CF80] text-[#100A06] shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Icon size={20} className="mr-2" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="animate-fade-in">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-[#100A06] mb-2">{currentDetails.title}</h3>
                        <div className="inline-block bg-[#557EAE]/10 text-[#557EAE] font-bold px-4 py-2 rounded-lg mb-4">
                            {currentDetails.eligibility}
                        </div>
                        <p className="text-gray-600">{currentDetails.description}</p>
                    </div>

                    <div className="relative">
                        {/* Desktop Timeline Line */}
                        <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E3CF80] via-[#557EAE] to-[#73826E] -z-10"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentDetails.steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="relative bg-white lg:bg-transparent">
                                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#E3CF80] hover:shadow-xl transition-all duration-300 group h-full">
                                            <div className="relative mb-6">
                                                <div className="w-20 h-20 bg-gradient-to-br from-[#557EAE] to-[#73826E] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 text-white shadow-lg">
                                                    <Icon size={32} />
                                                </div>
                                                {index < currentDetails.steps.length - 1 && (
                                                    <div className="hidden lg:block absolute top-1/2 -right-12 transform text-[#E3CF80]">
                                                        <ArrowRight size={24} />
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-[#100A06] mb-3 text-center">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed text-center">{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-[#557EAE]/5 to-[#E3CF80]/5 rounded-2xl p-8 lg:p-12 border border-[#E3CF80]/20">
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#100A06] mb-4">
                            Ready to Begin?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Secure your spot for the upcoming academic year. Limited seats available.
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
