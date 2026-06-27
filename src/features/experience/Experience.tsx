"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import CompanyCard from "./CompanyCard";
import ExperienceHeader from "./ExperienceHeader";
import { experiences } from "./data";

export default function Experience() {
    return (
        <Section id="experience">

            <Container>

                <ExperienceHeader />

                <div className="mt-24 space-y-10">

                    {experiences.map((company) => (
                        <CompanyCard
                            key={company.company}
                            {...company}
                        />
                    ))}

                </div>

            </Container>

        </Section>
    );
}