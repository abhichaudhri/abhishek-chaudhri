"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import {
    Mail,
    // Github,
    // Linkedin,
    Download,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const links = [
    {
        title: "Email",
        href: "mailto:abhichaudhri@gmail.com",
        icon: "mail",
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/abhishek-akshay-chaudhri",
        icon: "linkedin",
    },
    {
        title: "Resume",
        href: "/Abhishek_Akshay_Chaudhri.pdf",
        icon: "download",
    },
];

export default function Contact() {
    return (
        <Section id="contact">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="uppercase tracking-[0.3em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-black md:text-6xl">
                        Let's build something great.
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-400">
                        I'm always interested in building products that solve meaningful
                        problems and create delightful user experiences.
                    </p>

                    <div className="mt-14 grid gap-5 sm:grid-cols-3">
                        {links.map((item) => {
                            let icon = null;

                            switch (item.icon) {
                                case "mail":
                                    icon = <Mail size={20} />;
                                    break;
                                // case "github":
                                //     icon = <Github size={20} />;
                                //     break;
                                case "linkedin":
                                    icon = <FaLinkedin size={24} />;
                                    break;
                                case "download":
                                    icon = <Download size={20} />;
                                    break;
                            }

                            return (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    target={
                                        item.title === "Resume"
                                            ? "_self"
                                            : "_blank"
                                    }
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
                                >
                                    {icon}
                                    {item.title}
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}