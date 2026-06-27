import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>

      <div className="flex min-h-screen items-center justify-center">

        <div className="space-y-6 text-center">

          <p className="text-blue-500">
            PORTFOLIO UNDER CONSTRUCTION
          </p>

          <h1 className="text-6xl font-bold tracking-tight">

            Abhishek

            <br />

            Chaudhri

          </h1>

          <p className="mx-auto max-w-xl text-zinc-400">

            Building high-performance frontend experiences
            with React, TypeScript and scalable architecture.

          </p>

        </div>

      </div>

    </MaxWidthWrapper>
  );
}