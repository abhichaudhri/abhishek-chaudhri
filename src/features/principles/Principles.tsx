"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import PrincipleCard from "./PrincipleCard";
import SectionHeading from "./SectionHeading";
import { principles } from "./data";

export default function Principles() {
    return (
        <Section id="principles">
            <Container>
                <SectionHeading
                    eyebrow="Engineering Principles"
                    title="The way I think about building software."
                    subtitle="Over the last five years, I've learned that successful frontend applications are rarely about frameworks. They're about good engineering decisions."
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {principles.map((item) => (
                        <PrincipleCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}