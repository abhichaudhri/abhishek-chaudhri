"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
    return (
        <>
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="
        absolute
        left-20
        top-32
        h-[450px]
        w-[450px]
        rounded-full
        bg-blue-600/15
        blur-[120px]
      "
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 70, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                }}
                className="
        absolute
        right-0
        bottom-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-600/10
        blur-[150px]
      "
            />
        </>
    );
}