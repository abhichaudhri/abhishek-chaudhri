"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
}

export default function PrincipleCard({
    title,
    description,
}: Props) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
      group
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950/60
      p-8
      backdrop-blur-xl
      "
        >
            <h3
                className="
        text-3xl
        font-bold
        transition-colors
        group-hover:text-blue-400
        "
            >
                {title}
            </h3>

            <p
                className="
        mt-6
        text-lg
        leading-8
        text-zinc-400
        "
            >
                {description}
            </p>
        </motion.div>
    );
}