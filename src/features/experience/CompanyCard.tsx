"use client";

import { motion } from "framer-motion";

interface Props {
    company: string;
    role: string;
    duration: string;
    location: string;
    summary: string;
    achievements: string[];
    tech: string[];
}

export default function CompanyCard({
    company,
    role,
    duration,
    location,
    summary,
    achievements,
    tech,
}: Props) {

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition-colors hover:border-zinc-700"
        >
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-5">

                    <div>
                        <h3 className="text-3xl font-bold">
                            {company}
                        </h3>

                        <p className="mt-1 text-zinc-400">
                            {role}
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            {location}
                        </p>
                    </div>
                </div>

                <div className="rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                    {duration}
                </div>
            </div>

            {/* Summary */}
            <p className="mt-8 text-lg leading-8 text-zinc-400">
                {summary}
            </p>

            {/* Achievements */}
            <div className="mt-10">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Key Contributions
                </h4>

                <div className="flex flex-wrap gap-3">
                    {achievements.map((item) => (
                        <div
                            key={item}
                            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm transition hover:border-blue-500"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech */}
            <div className="mt-10">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-lg bg-blue-600/15 px-3 py-1 text-xs font-medium text-blue-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}