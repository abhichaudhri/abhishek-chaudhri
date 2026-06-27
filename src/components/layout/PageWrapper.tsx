import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function PageWrapper({
    children,
}: Props) {
    return (
        <main
            className="
      relative
      overflow-hidden
      bg-black
      text-white
      "
        >
            {children}
        </main>
    );
}