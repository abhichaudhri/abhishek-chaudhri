import Container from "@/components/layout/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import BackgroundGlow from "./BackgroundGlow";
import FloatingDots from "./FloatingDots";

export default function Hero() {
    return (
        <section className="
relative
min-h-screen
overflow-hidden
">
            <BackgroundGlow />
            <FloatingDots />

            <Container>

                <div
                    className="
          grid
          min-h-screen
          items-center
          gap-20
          lg:grid-cols-2
          "
                >

                    <HeroLeft />

                    <HeroRight />

                </div>

            </Container>

        </section>
    );
}