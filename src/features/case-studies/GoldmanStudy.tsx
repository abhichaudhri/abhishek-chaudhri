"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import StudySection from "./StudySection";
import { caseStudies } from "./caseStudies";

export default function GoldmanStudy() {

    const study = caseStudies.goldman;

    return (

        <Section id="case-study">

            <Container>

                <div className="max-w-4xl">

                    <p
                        className="
          uppercase
          tracking-[0.3em]
          text-blue-400
          "
                    >
                        Case Study
                    </p>

                    <h2
                        className="
          mt-4
          text-6xl
          font-black
          "
                    >
                        {study.title}
                    </h2>

                    <p
                        className="
          mt-10
          text-xl
          leading-9
          text-zinc-400
          "
                    >
                        {study.problem}
                    </p>

                </div>

                <StudySection

                    title="Constraints"

                    items={study.constraints}

                />

                <StudySection

                    title="Architecture"

                    items={study.architecture}

                />

                <StudySection

                    title="Tradeoffs"

                    items={study.tradeoffs}

                />

                <StudySection

                    title="Outcome"

                    items={study.outcome}

                />

            </Container>

        </Section>

    );

}