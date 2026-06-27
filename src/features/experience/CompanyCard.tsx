"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
    company: string;
    role: string;
    duration: string;
    summary: string;
    projects: string[];
}

export default function CompanyCard({
    company,
    role,
    duration,
    summary,
    projects,
}: Props) {
    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
            className="
      rounded-[32px]
      border
      border-zinc-800
      bg-zinc-950/70
      p-10
    "
        >
            <div className="flex items-start justify-between">

                <div>

                    <h3 className="text-4xl font-bold">
                        {company}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                        {role}
                    </p>

                </div>

                <span className="text-sm text-zinc-500">
                    {duration}
                </span>

            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
                {summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

                {projects.map((project) => (
                    <div
                        key={project}
                        className="
            rounded-full
            bg-zinc-900
            px-4
            py-2
            text-sm
          "
                    >
                        {project}
                    </div>
                ))}

            </div>

            <button
                className="
        mt-10
        flex
        items-center
        gap-2
        text-blue-400
      "
            >
                Explore Engineering

                <ArrowRight size={18} />
            </button>

        </motion.div>
    );
}