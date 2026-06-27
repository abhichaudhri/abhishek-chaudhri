"use client";

import { motion } from "framer-motion";

interface Props {
    eyebrow: string;
    title: string;
    subtitle: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
}: Props) {
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
            transition={{
                duration: 0.7,
            }}
            className="mb-20 max-w-3xl"
        >
            <p
                className="
        mb-4
        uppercase
        tracking-[0.3em]
        text-blue-400
        "
            >
                {eyebrow}
            </p>

            <h2
                className="
        text-5xl
        font-black
        leading-tight
        tracking-tight
        md:text-6xl
        "
            >
                {title}
            </h2>

            <p
                className="
        mt-8
        text-xl
        leading-9
        text-zinc-400
        "
            >
                {subtitle}
            </p>
        </motion.div>
    );
}