"use client";

import { motion } from "framer-motion";

const logs = [
    "Compiling components...",
    "Generating static pages...",
    "Optimizing bundles...",
    "Deploying edge runtime...",
    "Ready.",
];

export default function BuildLog() {
    return (
        <div className="mt-8 space-y-3">

            {logs.map((log, i) => (

                <motion.div

                    key={log}

                    initial={{
                        opacity: 0,
                        y: 8
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: i * .4
                    }}

                    className="
          flex
          items-center
          gap-3
          text-sm
          text-zinc-500
          "
                >

                    <div
                        className="
          h-2
          w-2
          rounded-full
          bg-blue-500
          "/>

                    {log}

                </motion.div>

            ))}

        </div>
    );
}