"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
    return (
        <div className="mt-8">

            <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.4
                        }}
                        className="
            h-3
            w-3
            rounded-full
            bg-emerald-400
            "
                    />

                    <span className="text-zinc-400">
                        <div className="flex items-center gap-2">

                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5
                                }}
                                className="
h-3
w-3
rounded-full
bg-emerald-400
"/>

                            <span>

                                Status

                            </span>

                        </div>
                    </span>

                </div>

                <span className="text-blue-400">
                    <motion.span

                        animate={{
                            opacity: [.5, 1, .5]
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 1.2
                        }}

                        className="text-blue-400"
                    >

                        Deploying

                    </motion.span>
                </span>

            </div>

            <div
                className="
        h-3
        overflow-hidden
        rounded-full
        bg-zinc-800
        "
            >

                <motion.div

                    animate={{
                        width: [
                            "10%",
                            "74%",
                            "95%",
                            "74%"
                        ]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 5
                    }}

                    className="
          h-full
          rounded-full

          bg-gradient-to-r

          from-blue-500

          via-cyan-400

          to-emerald-400
          "
                />

            </div>

        </div>
    );
}