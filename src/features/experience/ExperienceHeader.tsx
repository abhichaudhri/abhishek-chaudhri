"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            className="max-w-3xl"
        >
            <p className="tracking-[0.3em] uppercase text-blue-400">
                Experience
            </p>

            <h2
                className="
        mt-5
        text-6xl
        font-black
        tracking-tight
      "
            >
                Engineering products
                <br />
                used every day.
            </h2>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
                Five years building enterprise applications,
                frontend architecture and performance-first user
                experiences.
            </p>
        </motion.div>
    );
}