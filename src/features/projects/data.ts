export interface Project {
    title: string;
    company: string;
    tagline: string;

    impact: {
        value: string;
        label: string;
    }[];

    highlights: string[];

    tech: string[];
}

export const projects: Project[] = [
    {
        title: "Enterprise Grid Performance",
        company: "Goldman Sachs",
        tagline: "Scaling enterprise data grids beyond 100K records.",

        impact: [
            {
                value: "100K+",
                label: "Records",
            },
            {
                value: "40%",
                label: "Faster Loading",
            },
        ],

        highlights: [
            "IndexedDB caching",
            "Controlled rendering",
            "Reusable data layer",
            "Render optimization",
        ],

        tech: [
            "React",
            "TypeScript",
            "IndexedDB",
            "Performance",
        ],
    },

    {
        title: "Maker–Checker Platform",
        company: "Goldman Sachs",
        tagline: "Enterprise approval workflow with governance & RBAC.",

        impact: [
            {
                value: "1K+",
                label: "Approval Requests",
            },
            {
                value: "40%",
                label: "Faster Approval",
            },
        ],

        highlights: [
            "RBAC",
            "Audit Logging",
            "Request Consolidation",
            "Reusable Workflow",
        ],

        tech: [
            "React",
            "TypeScript",
            "RBAC",
            "REST APIs",
        ],
    },

    {
        title: "Enterprise React Performance",
        company: "Goldman Sachs",
        tagline: "Optimizing rendering across large-scale React applications.",

        impact: [
            {
                value: "700+",
                label: "API Calls Eliminated",
            },
            {
                value: "Multi-App",
                label: "Performance Improvements",
            },
        ],

        highlights: [
            "React Profiling",
            "Memoization",
            "Lifecycle Optimization",
            "State Restructuring",
        ],

        tech: [
            "React",
            "TypeScript",
            "Performance",
            "Hooks",
        ],
    },

    {
        title: "Frontend Platform",
        company: "Goldman Sachs",
        tagline: "Reusable engineering infrastructure for enterprise teams.",

        impact: [
            {
                value: "5+",
                label: "Applications",
            },
            {
                value: "1",
                label: "Frontend Owner",
            },
        ],

        highlights: [
            "Proxy Framework",
            "Custom Hooks",
            "Shared API Layer",
            "Environment Switching",
        ],

        tech: [
            "React",
            "TypeScript",
            "Developer Experience",
            "REST APIs",
        ],
    },

    {
        title: "Legacy Application Modernization",
        company: "Oracle",
        tagline: "Migrating enterprise applications to modern React.",

        impact: [
            {
                value: "40+",
                label: "Screens Migrated",
            },
            {
                value: "30%",
                label: "Technical Debt Reduced",
            },
        ],

        highlights: [
            "React Migration",
            "TypeScript",
            "Reusable Components",
            "Architecture Modernization",
        ],

        tech: [
            "React",
            "TypeScript",
            "Oracle JET",
        ],
    },

    {
        title: "Frontend Quality Engineering",
        company: "Oracle",
        tagline: "Improving developer productivity and application quality.",

        impact: [
            {
                value: "100+",
                label: "Code Reviews",
            },
            {
                value: "CI/CD",
                label: "Automation",
            },
        ],

        highlights: [
            "Jest",
            "Cypress",
            "Component Library",
            "Developer Tooling",
        ],

        tech: [
            "React",
            "Jest",
            "Cypress",
            "CI/CD",
        ],
    },
];