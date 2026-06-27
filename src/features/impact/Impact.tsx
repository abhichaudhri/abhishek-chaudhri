"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Metric from "./Metric";
import { impactMetrics } from "./data";

export default function Impact() {
    return (
        <Section id="impact">
            <Container>
                <p className="uppercase tracking-[0.3em] text-blue-400">
                    Selected Impact
                </p>

                <h2 className="mt-4 text-6xl font-black">
                    Numbers tell only part of the story.
                </h2>

                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {impactMetrics.map((metric) => (
                        <Metric key={metric.label} {...metric} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}