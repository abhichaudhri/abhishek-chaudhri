"use client";

import { motion } from "framer-motion";

interface Props {
    value: string;
    label: string;
}

export default function Metric({ value, label }: Props) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8"
        >
            <h3 className="text-5xl font-black text-blue-400">
                {value}
            </h3>

            <p className="mt-4 text-zinc-400">
                {label}
            </p>
        </motion.div>
    );
}