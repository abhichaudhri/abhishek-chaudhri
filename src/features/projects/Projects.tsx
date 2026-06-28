"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <Section id="projects">
            <Container>
                <p className="uppercase tracking-[0.3em] text-blue-400">
                    Highlighted Engineering Work
                </p>

                <h2 className="mt-4 text-6xl font-black">
                    Engineering challenges I've enjoyed solving.
                </h2>

                <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-9">
                    A few projects that best represent my approach to frontend
                    engineering, performance optimization and scalable architecture.
                </p>

                <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}