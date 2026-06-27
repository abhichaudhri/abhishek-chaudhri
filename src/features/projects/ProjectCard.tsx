"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    company: string;
    description: string;
    tech: string[];
}

export default function ProjectCard({
    title,
    company,
    description,
    tech,
}: Props) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8"
        >
            <p className="text-blue-400 text-sm uppercase tracking-[0.25em]">
                {company}
            </p>

            <h3 className="mt-4 text-3xl font-bold">
                {title}
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
                {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-full bg-zinc-900 px-4 py-2 text-sm"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}