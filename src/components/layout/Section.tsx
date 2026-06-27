import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
}

export default function Section({
    children,
    id,
}: Props) {
    return (
        <section
            id={id}
            className="py-32"
        >
            {children}
        </section>
    );
}