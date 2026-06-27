"use client";

import { motion } from "framer-motion";

const words = [
    "Building",
    "frontend",
    "experiences",
    "that",
    "feel",
    "effortless.",
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function AnimatedHeadline() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-8"
        >
            {words.map((word) => (
                <motion.div
                    key={word}
                    variants={item}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
          overflow-hidden
          "
                >
                    <h1
                        className="
            text-6xl
            font-black
            leading-[0.92]
            tracking-[-0.07em]

            md:text-8xl
            "
                    >
                        {word}
                    </h1>
                </motion.div>
            ))}
        </motion.div>
    );
}