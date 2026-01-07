'use client';
import React, { useState } from 'react';
import {
    BookOpen, FlaskConical, Calculator, Award, Baby,
    Palette, Brain, Microscope, Atom, Target, Users,
    Sparkles, ArrowRight, CheckCircle2, GraduationCap
} from 'lucide-react';
import { mockData } from '../mock';
import Link from 'next/link';

const Courses = () => {
    // Icons for School Tuition
    const schoolIcons = [BookOpen, Calculator, FlaskConical, Award];

    // Icons for Competitive Exams
    const competitiveIcons = [Microscope, Atom];

    return (
        <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Section Header */}
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Our Programs</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Courses Offered
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Comprehensive education from Play School to Competitive Exams
                    </p>
                </div>

                {/* 1. Play School - Hero Card Style */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E3CF80] to-[#F0E6B8] rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-20"></div>
                    <div className="relative bg-[#FFF9F0] border border-[#E3CF80]/30 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E3CF80]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-[#C9A85D] font-bold text-sm">
                                    <Baby size={18} />
                                    <span>Foundational Years</span>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold text-[#100A06] mb-4">
                                        {mockData.playSchool.title}
                                    </h3>
                                    <p className="text-xl text-[#557EAE] font-medium mb-6">
                                        For Ages: {mockData.playSchool.ageGroup}
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {mockData.playSchool.description}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {mockData.playSchool.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white/80 p-4 rounded-xl border border-[#E3CF80]/20 shadow-sm hover:scale-105 transition-transform duration-300">
                                            <div className="p-2 bg-[#E3CF80]/20 rounded-lg">
                                                <Palette className="text-[#C9A85D]" size={20} />
                                            </div>
                                            <span className="font-semibold text-gray-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden lg:grid grid-cols-2 gap-6">
                                <div className="space-y-6 mt-12">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Brain className="text-[#557EAE] mb-3" size={32} />
                                        <h4 className="font-bold text-[#100A06]">Cognitive</h4>
                                        <p className="text-sm text-gray-500">Development</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Users className="text-[#C9A85D] mb-3" size={32} />
                                        <h4 className="font-bold text-[#100A06]">Social</h4>
                                        <p className="text-sm text-gray-500">Skills</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Palette className="text-[#73826E] mb-3" size={32} />
                                        <h4 className="font-bold text-[#100A06]">Creative</h4>
                                        <p className="text-sm text-gray-500">Arts</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Baby className="text-[#E3CF80] mb-3" size={32} />
                                        <h4 className="font-bold text-[#100A06]">Motor</h4>
                                        <p className="text-sm text-gray-500">Skills</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Academic Coaching - Modern Grid */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-[#557EAE] font-bold tracking-wider uppercase text-sm mb-2 block">Core Academics</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#100A06]">Academic Coaching</h3>
                        <p className="text-gray-500 mt-2">Classes 1 to 12 • All Subjects</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockData.schoolCourses.map((course, index) => {
                            const Icon = schoolIcons[index] || BookOpen;
                            return (
                                <div
                                    key={course.id}
                                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#557EAE] to-[#C9A85D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#557EAE] transition-colors duration-300">
                                        <Icon size={28} className="text-[#557EAE] group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h4 className="text-xl font-bold text-[#100A06] mb-3 group-hover:text-[#557EAE] transition-colors">
                                        {course.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[40px]">
                                        {course.description}
                                    </p>

                                    <ul className="space-y-3 pt-6 border-t border-gray-100">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <CheckCircle2 size={16} className="text-[#C9A85D] mr-2 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Competitive Exams - High Contrast / Professional */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-[#73826E] font-bold tracking-wider uppercase text-sm mb-2 block">Advanced Preparation</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#100A06]">Competitive Exams</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {mockData.competitiveExams.map((exam, index) => {
                            const Icon = competitiveIcons[index] || Target;
                            return (
                                <div key={exam.id} className="relative overflow-hidden bg-[#100A06] rounded-[2rem] p-8 md:p-10 text-white group">
                                    {/* Abstract Shapes */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#557EAE] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A85D] opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:opacity-20 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                                    <Icon size={32} className="text-[#E3CF80]" />
                                                </div>
                                                <span className="inline-block px-3 py-1 bg-[#557EAE]/20 text-[#557EAE] text-xs font-bold uppercase tracking-wider rounded-full border border-[#557EAE]/30">
                                                    Intensive Coaching
                                                </span>
                                            </div>

                                            <h4 className="text-3xl font-bold mb-2">{exam.title}</h4>
                                            <p className="text-[#C9A85D] font-medium mb-6 flex items-center gap-2">
                                                <BookOpen size={16} /> {exam.subjects}
                                            </p>

                                            <p className="text-gray-300 mb-8 leading-relaxed">
                                                {exam.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                                                {exam.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                        <div className="w-1.5 h-1.5 bg-[#557EAE] rounded-full"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full md:w-auto flex flex-col gap-4">
                                            <button className="w-full md:w-auto px-6 py-3 bg-white text-[#100A06] font-bold rounded-xl hover:bg-[#E3CF80] transition-colors duration-300 flex items-center justify-center gap-2">
                                                Syllabus
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Syllabus Boards - Simple & Clean */}
                <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-[#100A06]">Curriculum Coverage</h3>
                        <p className="text-gray-500 mt-2">We support students across all major educational boards</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mockData.syllabusBoards.map((board) => (
                            <div key={board.id} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#100A06]/5 text-[#100A06] rounded-full flex items-center justify-center mb-4">
                                    <GraduationCap size={24} />
                                </div>
                                <h4 className="font-bold text-[#100A06] mb-2">{board.name}</h4>
                                <p className="text-sm text-gray-600">{board.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Courses;
