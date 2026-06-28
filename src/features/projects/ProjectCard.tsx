"use client";

import { motion } from "framer-motion";
interface Props {
    title: string;
    company: string;
    tagline: string;

    impact: {
        value: string;
        label: string;
    }[];

    highlights: string[];

    tech: string[];
}

export default function ProjectCard({
    title,
    company,
    tagline,
    impact,
    highlights,
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

            <p className="mt-5 text-zinc-400 leading-7">
                {tagline}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
                {impact.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
                    >
                        <p className="text-3xl font-black text-blue-400">
                            {item.value}
                        </p>

                        <p className="mt-1 text-sm text-zinc-400">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                    <div
                        key={item}
                        className="rounded-full border border-zinc-800 px-4 py-2 text-sm"
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-lg bg-blue-600/15 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}