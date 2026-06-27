"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    items: string[];
}

export default function StudySection({
    title,
    items,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            className="mt-12"
        >
            <h3
                className="
        text-2xl
        font-bold
      "
            >
                {title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">

                {items.map(item => (
                    <div
                        key={item}
                        className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900/60
            px-5
            py-3
          "
                    >
                        {item}
                    </div>
                ))}

            </div>

        </motion.div>
    );
}