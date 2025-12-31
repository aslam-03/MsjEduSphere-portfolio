'use client';
import React from 'react';
import { BookOpen, FlaskConical, Calculator, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockData } from '../mock';

const Courses = () => {
    const icons = [BookOpen, Calculator, FlaskConical, Award];

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
                        Comprehensive tuition programs designed for every academic stage
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {mockData.courses.map((course, index) => {
                        const Icon = icons[index];
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

                {/* Syllabus Boards Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-[#100A06] text-center mb-12">
                        Syllabus Coverage
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
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
                                        <h4 className="text-2xl font-bold text-[#100A06] mb-3">{board.name}</h4>
                                        <p className="text-gray-700 leading-relaxed">{board.description}</p>
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
