'use client';
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-[#100A06] to-[#2a2520] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#E3CF80] to-[#C9A85D] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">MSJ</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-tight">MSJ Educational</span>
                                <span className="text-sm text-[#E3CF80] leading-tight">Academy</span>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Providing quality education and personalized attention to students of Classes 1-12 since 2018.
                        </p>
                        <p className="text-[#E3CF80] font-semibold italic">
                            &quot;Learn! Try! Succeed!&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#E3CF80]">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                                    className="text-gray-300 hover:text-[#E3CF80] transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
                                    className="text-gray-300 hover:text-[#E3CF80] transition-colors duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#courses"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('#courses'); }}
                                    className="text-gray-300 hover:text-[#E3CF80] transition-colors duration-300"
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faculty"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('#faculty'); }}
                                    className="text-gray-300 hover:text-[#E3CF80] transition-colors duration-300"
                                >
                                    Faculty
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#results"
                                    onClick={(e) => { e.preventDefault(); scrollToSection('#results'); }}
                                    className="text-gray-300 hover:text-[#E3CF80] transition-colors duration-300"
                                >
                                    Results
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#E3CF80]">Our Programs</h3>
                        <div className="text-sm font-semibold text-gray-400 mb-4 pb-2 border-b border-gray-700">
                            Play School | Classes 1–12 | NEET | JEE
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li>Play School (2.5 - 5 Years)</li>
                            <li>Primary & Middle School (1-8)</li>
                            <li>High School (9-10)</li>
                            <li>Higher Secondary (11-12)</li>
                            <li>NEET & JEE Coaching</li>
                            <li className="pt-2 border-t border-gray-700">
                                <span className="font-semibold text-white">Boards:</span> CBSE & State
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#E3CF80]">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-[#E3CF80] flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">
                                    MSJ Educational Academy,<br />
                                    Coimbatore, Tamil Nadu.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-[#E3CF80] flex-shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-[#E3CF80] flex-shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">admissions@msjacademy.com</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E3CF80] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E3CF80] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E3CF80] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E3CF80] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} MSJ Educational Academy. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-[#E3CF80] transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#E3CF80] transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
