"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
    const handleProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    const handleResume = () => {
        const link = document.createElement("a");
        link.href = "/Abhishek_Akshay_Chaudhri.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.click();
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

            <motion.button
                type="button"
                whileHover={{
                    scale: 1.04,
                    y: -2,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                onClick={handleResume}
                className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-8 py-4 backdrop-blur-xl transition-colors hover:border-blue-500 hover:bg-zinc-800"
            >
                Resume
                <Download size={18} />
            </motion.button>
        </div>
    );
}