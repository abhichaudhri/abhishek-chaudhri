"use client";

import { motion } from "framer-motion";
import useCounter from "./hooks/useCounter";

interface Props {
    label: string;
    value: number;
    suffix?: string;
}

export default function Metric({
    label,
    value,
    suffix = "",
}: Props) {
    const counter = useCounter(value);

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 15,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            className="
      flex
      items-center
      justify-between
      py-4
      border-b
      border-zinc-900
      "
        >
            <span
                className="
        text-zinc-500
        tracking-wide
        "
            >
                {label}
            </span>

            <span
                className="
        font-mono
        text-xl
        font-semibold
        "
            >
                {counter}
                {suffix}
            </span>
        </motion.div>
    );
}