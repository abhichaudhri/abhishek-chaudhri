"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "How I Build", id: "principles" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter((el): el is HTMLElement => el !== null);

            const viewportMiddle = window.innerHeight * 0.35;

            let current = "";

            for (const section of sections) {
                const rect = section.getBoundingClientRect();

                if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                    current = section.id;
                    break;
                }
            }

            if (current) {
                setActive(current);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setOpen(false);

        const section = document.getElementById(id);

        if (!section) return;

        const y =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            90;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header
                className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-zinc-900/50
        bg-black/70
        backdrop-blur-xl
      "
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="text-xl font-bold"
                    >
                        Abhishek
                    </button>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`relative py-1 transition-all duration-300 ${active === item.id
                                        ? "text-blue-400"
                                        : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                {item.label}

                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-400 transition-all duration-300 ${active === item.id ? "w-full" : "w-0"
                                        }`}
                                />
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href="/Abhishek_Akshay_Chaudhri.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-zinc-800 px-4 py-2 hover:border-blue-500"
                        >
                            Resume

                            <Download size={16} />
                        </a>
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        className="fixed top-16 left-0 right-0 z-40 border-b border-zinc-900 bg-black lg:hidden"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="block w-full border-b border-zinc-900 px-6 py-5 text-left"
                            >
                                {item.label}
                            </button>
                        ))}

                        <a
                            href="/Abhishek_Akshay_Chaudhri.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-5"
                        >
                            Resume

                            <Download size={16} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}