"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
    const handleProjects = () => {
        const section = document.getElementById("projects");

        if (!section) return;

        const y =
            section.getBoundingClientRect().top +
            window.scrollY -
            90;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <div className="mt-12 flex flex-wrap gap-5">
            <motion.button
                type="button"
                whileHover={{
                    scale: 1.04,
                    y: -2,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                onClick={handleProjects}
                className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-colors hover:bg-blue-500"
            >
                View Projects
                <ArrowRight size={18} />
            </motion.button>
        </div>
    );
}