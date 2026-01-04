'use client';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="font-heading text-3xl font-bold text-center text-msj-text mb-12">
                    Campus Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto h-[500px]">
                    {/* Main Large Image */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-2 row-span-2 bg-gray-200 rounded-2xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-msj-blue/10 flex items-center justify-center text-gray-400 font-bold">
                            Classroom Main
                        </div>
                    </motion.div>

                    {/* Smaller Images */}
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 rounded-xl overflow-hidden relative min-h-[150px]">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Study Area</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 rounded-xl overflow-hidden relative min-h-[150px]">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Lab Session</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 rounded-xl overflow-hidden relative min-h-[150px]">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Events</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 rounded-xl overflow-hidden relative min-h-[150px]">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Library</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
