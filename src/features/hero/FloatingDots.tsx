"use client";

import { motion } from "framer-motion";

export default function FloatingDots() {
    return (
        <>
            {[...Array(18)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -18, 0],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                    }}
                    className="
          absolute
          h-1
          w-1
          rounded-full
          bg-blue-400/40
          "
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </>
    );
}