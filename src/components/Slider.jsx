import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/slider.css';
import img1 from "../public/img/img1.jpg";
import img2 from "../public/img/img2.jpg";
import img3 from "../public/img/img3.jpg";
import img4 from "../public/img/img4.jpg";

const items = [
    { imgSrc: img1, title: 'MAGIC SLIDER', type: 'FLOWER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { imgSrc: img2, title: 'ANOTHER SLIDE', type: 'NATURE', description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    { imgSrc: img3, title: 'YET ANOTHER', type: 'PLANT', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { imgSrc: img4, title: 'FINAL SLIDE', type: 'WILDLIFE', description: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
];

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlider = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
    };

    // Change slide automatically
    useEffect(() => {
        const interval = setInterval(() => {
            moveSlider('next');
        }, 6000); // Change the duration

        return () => clearInterval(interval);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                moveSlider('next');
            } else if (event.key === 'ArrowLeft') {
                moveSlider('prev');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden slider">
            <AnimatePresence>
                <motion.div
                    className="list"
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={`item absolute inset-0 transition-opacity duration-500`}>
                        <img
                            src={items[currentIndex].imgSrc}
                            alt={items[currentIndex].title}
                            className="object-cover w-full mb-4 h-5/6"
                        />
                        <motion.div
                            initial={{ y: -100, opacity: 0, filter: 'blur(20px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ y: -100, opacity: 0, filter: 'blur(20px)' }}
                            transition={{ duration: 0.5 }}
                            className="absolute text-left text-white transform -translate-x-0 content top-1/4 left-10"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Delay for title
                                className="text-5xl font-bold title"
                            >
                                {items[currentIndex].title}
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Delay for type
                                className="text-3xl text-green-400 type"
                            >
                                {items[currentIndex].type}
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                transition={{ duration: 0.5, delay: 0.6 }} // Delay for description
                                className="mt-4 description"
                            >
                                {items[currentIndex].description}
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                                transition={{ duration: 0.5, delay: 0.8 }} // Delay for button
                                className="mt-6 button"
                            >
                                <button className="px-4 py-2 transition duration-200 bg-gray-300 rounded hover:bg-gray-400">
                                    SEE MORE
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Botones de navegación */}
            <div className="nextPrevArrows">
                <button onClick={() => moveSlider('prev')} className="p-2 text-white bg-green-500 rounded-full">&lt;</button>
                <button onClick={() => moveSlider('next')} className="p-2 text-white bg-green-500 rounded-full">&gt;</button>
            </div>
        </div>
    );
};