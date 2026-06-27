"use client";

import { motion } from "framer-motion";

import TerminalBody from "./TerminalBody";
import TerminalHeader from "./TerminalHeader";

export default function AnimatedTerminal() {
    return (
        <motion.div
            whileHover={{
                y: -6,
                rotateX: 3,
                rotateY: -3,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950
      shadow-[0_40px_100px_rgba(37,99,235,.15)]
      "
        >
            <TerminalHeader />

            <TerminalBody />

        </motion.div>
    );
}