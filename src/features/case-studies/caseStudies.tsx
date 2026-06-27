export const caseStudies = {
    goldman: {
        title: "Enterprise Client Onboarding Platform",

        problem:
            "The onboarding platform contained large enterprise grids, approval workflows and legacy frontend patterns that became increasingly difficult to scale.",

        constraints: [
            "100k+ records",

            "Deeply nested enterprise grid",

            "Role-based permissions",

            "Large React application",

            "Strict enterprise standards",
        ],

        architecture: [
            "React",

            "TypeScript",

            "IndexedDB",

            "Custom Hooks",

            "Shared Component Library",

            "Role Based UI",
        ],

        tradeoffs: [
            "Optimized rendering without sacrificing maintainability",

            "Reusable abstractions instead of one-off fixes",

            "Caching while preserving data consistency",
        ],

        outcome: [
            "Reduced rendering time",

            "Reduced repetitive API requests",

            "Improved developer productivity",

            "Better scalability",
        ],
    },
};