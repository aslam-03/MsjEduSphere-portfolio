'use client';
import React from 'react';
import { BookOpen, FlaskConical, Calculator, Award, Baby, Palette, Brain, Microscope, Atom, Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockData } from '../mock';


const Courses = () => {
    // Icons for School Tuition
    const schoolIcons = [BookOpen, Calculator, FlaskConical, Award];

    // Icons for Competitive Exams
    const competitiveIcons = [Microscope, Atom];

    return (
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
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

                {/* 1. Play School Program */}
                <div className="mb-20">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-[#E3CF80]/20 p-3 rounded-full mr-4">
                            <Baby className="text-[#C9A85D]" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-[#100A06]">Play School Program</h3>
                    </div>

                    <div className="bg-[#FFF9E5] rounded-3xl p-8 lg:p-12 border-2 border-[#E3CF80]/30 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3CF80]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#557EAE]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h4 className="text-2xl font-bold text-[#100A06] mb-4">{mockData.playSchool.title}</h4>
                                <div className="inline-block bg-[#C9A85D] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                                    Age: {mockData.playSchool.ageGroup}
                                </div>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    {mockData.playSchool.description}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {mockData.playSchool.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 bg-white/60 p-3 rounded-lg">
                                            <Palette className="text-[#557EAE]" size={20} />
                                            <span className="text-gray-800 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center">
                                {/* Abstract Visual Representation of Play School */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-[#E3CF80]/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Brain className="text-[#E3CF80]" size={40} />
                                        <p className="mt-2 font-semibold text-gray-600">Cognitive Skills</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-[#557EAE]/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                                        <Users className="text-[#557EAE]" size={40} />
                                        <p className="mt-2 font-semibold text-gray-600">Social Skills</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. School Tuition (Classes 1-12) */}
                <div className="mb-20">
                    <div className="flex items-center justify-center mb-10">
                        <div className="bg-[#557EAE]/10 p-3 rounded-full mr-4">
                            <BookOpen className="text-[#557EAE]" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-[#100A06]">Academic Coaching (Classes 1–12)</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockData.schoolCourses.map((course, index) => {
                            const Icon = schoolIcons[index] || BookOpen;
                            return (
                                <Card
                                    key={course.id}
                                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#E3CF80] cursor-pointer"
                                >
                                    <CardHeader>
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#557EAE] to-[#73826E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-white" size={28} />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-[#100A06] group-hover:text-[#557EAE] transition-colors duration-300">
                                            {course.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">
                                            {course.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {course.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-[#E3CF80] mr-2 mt-1">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Competitive Exam Coaching */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-10">
                        <div className="bg-[#73826E]/10 p-3 rounded-full mr-4">
                            <Target className="text-[#73826E]" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-[#100A06]">Competitive Exam Coaching</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {mockData.competitiveExams.map((exam, index) => {
                            const Icon = competitiveIcons[index] || Target;
                            return (
                                <div key={exam.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                                    <div className="h-2 bg-gradient-to-r from-[#557EAE] to-[#73826E]"></div>
                                    <div className="p-8 flex-1">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h4 className="text-2xl font-bold text-[#100A06] mb-2">{exam.title}</h4>
                                                <p className="text-[#557EAE] font-medium">{exam.subjects}</p>
                                            </div>
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                <Icon className="text-[#100A06]" size={28} />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6">{exam.description}</p>
                                        <ul className="space-y-3">
                                            {exam.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                                                    <div className="w-2 h-2 bg-[#E3CF80] rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                                        <button className="text-[#557EAE] font-semibold flex items-center hover:text-[#100A06] transition-colors">
                                            Learn More <BookOpen size={16} className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Syllabus Boards Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-[#100A06] text-center mb-12">
                        Syllabus & Curriculum Coverage
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mockData.syllabusBoards.map((board) => (
                            <div
                                key={board.id}
                                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#557EAE] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#E3CF80]/20 rounded-lg flex items-center justify-center">
                                            <Award className="text-[#C9A85D]" size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#100A06] mb-3">{board.name}</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">{board.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
