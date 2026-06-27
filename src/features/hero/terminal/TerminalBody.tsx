"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

import TypingLine from "./TypingLine";

const tasks = [
    "Optimizing render performance...",
    "Removing unnecessary re-renders...",
    "Creating IndexedDB cache...",
    "Memoizing expensive components...",
    "Generating production bundle...",
    "Deployment successful.",
];

export default function TerminalBody() {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prev) => {
                if (prev >= tasks.length) {
                    clearInterval(interval);
                    return prev;
                }

                return prev + 1;
            });
        }, 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-5 p-7">

            <TypingLine text="npm run build" />

            {tasks.slice(0, visible).map((task, index) => (
                <motion.div
                    key={task}
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="flex items-center gap-3"
                >
                    <CheckCircle2
                        size={18}
                        className="text-emerald-400"
                    />

                    <span className="font-mono text-zinc-400">
                        {task}
                    </span>

                </motion.div>
            ))}

        </div>
    );
}