"use client";

import { motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import Metric from "./Metric";
import BuildLog from "./BuildLog";

export default function PerformanceDashboard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: .3
            }}
            className="
            relative
overflow-hidden
      rounded-[32px]
      border
      border-zinc-800
      bg-black/70
      p-8
      backdrop-blur-3xl
      "
        >
            <div
                className="
absolute

right-[-120px]

top-[-120px]

h-72

w-72

rounded-full

bg-blue-500/10

blur-[120px]
"
            />

            <div className="mb-8">

                <p className="text-zinc-500">

                    Frontend Performance

                </p>

                <h2 className="mt-2 text-3xl font-bold">

                    Production Build

                </h2>

            </div>

            <div className="space-y-1">

                <Metric
                    label="FPS"
                    value={60}
                />

                <Metric
                    label="Bundle"
                    value={132}
                    suffix=" KB"
                />

                <Metric
                    label="Latency"
                    value={18}
                    suffix=" ms"
                />

                <Metric
                    label="Cache Hit"
                    value={98}
                    suffix="%"
                />

            </div>
            <ProgressBar />
            <BuildLog />

        </motion.div>
    );
}