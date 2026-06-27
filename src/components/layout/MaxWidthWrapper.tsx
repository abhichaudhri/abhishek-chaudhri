import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function MaxWidthWrapper({
    children,
}: Props) {
    return (
        <main className="mx-auto max-w-[1440px]">
            {children}
        </main>
    );
}