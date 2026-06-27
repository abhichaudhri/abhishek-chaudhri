"use client";

import { motion } from "framer-motion";

import PerformanceDashboard from "./dashboard/PerformanceDashboard";

export default function HeroRight() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 80
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: .8,
                delay: .3
            }}
            className="hidden lg:block"
        >

            <PerformanceDashboard />

        </motion.div>
    );
}