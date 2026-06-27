"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
            }}
            className="inline-flex"
        >
            <div
                className="
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-5
        py-2
        backdrop-blur-xl
      "
            >
                <span className="text-sm font-medium text-blue-400">
                    Frontend Performance Engineer
                </span>
            </div>
        </motion.div>
    );
}