'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        className: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock form submission
        alert("Enquiry Submitted! We'll contact you soon.");
        setFormData({
            name: '',
            email: '',
            phone: '',
            className: '',
            message: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#100A06] mt-2 mb-4">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-base max-w-3xl mx-auto">
                        Have questions? We&apos;re here to help. Reach out to us today!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-[#100A06] mb-4">Visit Us</h3>
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#557EAE]/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-[#557EAE]" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#100A06] mb-1 text-sm">Address</h4>
                                        <p className="text-gray-700 text-sm">
                                            MSJ Educational Academy,<br />
                                            Coimbatore, Tamil Nadu.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#E3CF80]/20 rounded-lg flex items-center justify-center">
                                        <Phone className="text-[#C9A85D]" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#100A06] mb-1 text-sm">Phone</h4>
                                        <p className="text-gray-700 text-sm">+91 98765 43210</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#73826E]/10 rounded-lg flex items-center justify-center">
                                        <Mail className="text-[#73826E]" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#100A06] mb-1 text-sm">Email</h4>
                                        <p className="text-gray-700 text-sm">admissions@msjacademy.com</p>
                                    </div>
                                </div>

                                {/* WhatsApp Button */}
                                <div>
                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-colors shadow-md shadow-green-200 text-sm"
                                    >
                                        <MessageCircle size={18} /> Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-gray-200 rounded-xl overflow-hidden h-56 md:h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173117564!2d76.88483320645607!3d11.014203199732297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183edce0!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703950000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200">
                        <h3 className="text-xl font-bold text-[#100A06] mb-4">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-[#100A06] font-semibold block mb-1 text-sm">Full Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#557EAE] focus:ring-1 focus:ring-[#557EAE] bg-white text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-[#100A06] font-semibold block mb-1 text-sm">Email *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#557EAE] focus:ring-1 focus:ring-[#557EAE] bg-white text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="text-[#100A06] font-semibold block mb-1 text-sm">Phone Number *</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#557EAE] focus:ring-1 focus:ring-[#557EAE] bg-white text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="className" className="text-[#100A06] font-semibold block mb-1 text-sm">Class *</label>
                                <input
                                    id="className"
                                    name="className"
                                    value={formData.className}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Class 10"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#557EAE] focus:ring-1 focus:ring-[#557EAE] bg-white text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-[#100A06] font-semibold block mb-1 text-sm">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements"
                                    rows={3}
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#557EAE] focus:ring-1 focus:ring-[#557EAE] bg-white text-sm"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#E3CF80] hover:bg-[#C9A85D] text-[#100A06] font-semibold py-3 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <Send className="mr-2" size={18} />
                                Send Enquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
