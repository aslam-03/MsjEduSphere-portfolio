'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Trophy, Users, Award, Target } from 'lucide-react';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={nodeRef}>{count}</span>;
};

const Results = () => {
    const achievementCards = [
        {
            icon: Users,
            value: 500,
            suffix: '+',
            label: 'Students Taught',
            color: 'from-[#557EAE] to-[#73826E]'
        },
        {
            icon: Trophy,
            value: 95,
            suffix: '%',
            label: 'Pass Percentage',
            color: 'from-[#E3CF80] to-[#C9A85D]'
        },
        {
            icon: Award,
            value: 7,
            suffix: '+',
            label: 'Years of Excellence',
            color: 'from-[#557EAE] to-[#73826E]'
        },
        {
            icon: Target,
            value: 50,
            suffix: '+',
            label: 'Distinctions Achieved',
            color: 'from-[#E3CF80] to-[#C9A85D]'
        }
    ];

    return (
        <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#C9A85D] font-semibold text-sm uppercase tracking-wide">Our Impact</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#100A06] mt-2 mb-4">
                        Results & Achievements
                    </h2>
                    <div className="w-24 h-1 bg-[#E3CF80] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Numbers that speak for our commitment to excellence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievementCards.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#E3CF80] hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white" size={28} />
                                </div>
                                <div className="text-4xl lg:text-5xl font-bold text-[#100A06] mb-2 flex items-center">
                                    <CountUp end={item.value} />
                                    <span>{item.suffix}</span>
                                </div>
                                <div className="text-gray-600 font-medium">{item.label}</div>
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
};

export default Results;
