"use client";

import { motion } from "framer-motion";

import AnimatedHeadline from "./AnimatedHeadline";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

export default function HeroLeft() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <HeroBadge />

            <AnimatedHeadline />

            <motion.p
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.9,
                    duration: 0.6,
                }}
                className="
        mt-10
        max-w-xl
        text-xl
        leading-9
        text-zinc-400
      "
            >
                I build enterprise-grade frontend applications focused on
                performance, scalable architecture, developer experience and
                beautiful user interfaces.
            </motion.p>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 1.15,
                    duration: 0.5,
                }}
            >
                <HeroButtons />
            </motion.div>
        </motion.div>
    );
}