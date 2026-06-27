"use client";

import { useTyping } from "./hooks/useTyping";

interface Props {
    text: string;
    delay?: number;
}

export default function TypingLine({
    text,
    delay = 0,
}: Props) {
    const typed = useTyping(text, 35, true);

    return (
        <div className="flex items-center gap-3">

            <span className="text-green-400">
                $
            </span>

            <span className="font-mono text-zinc-300">
                {typed}

                <span className="animate-pulse text-blue-400">
                    |
                </span>

            </span>

        </div>
    );
}