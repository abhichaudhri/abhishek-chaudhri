"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "IndexedDB",
    "Performance",
    "Accessibility",
    "Jest",
    "Cypress",
    "Git",
    "CI/CD",
    "REST APIs",
];

export default function Skills() {
    return (
        <Section id="skills">
            <Container>
                <p className="uppercase tracking-[0.3em] text-blue-400">
                    Skills
                </p>

                <h2 className="mt-4 text-5xl font-black">
                    Technologies I work with.
                </h2>

                <div className="mt-12 flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}