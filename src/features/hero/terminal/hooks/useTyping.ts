"use client";

import { useEffect, useState } from "react";

export function useTyping(
    text: string,
    speed = 30,
    start = true
) {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (!start) return;

        let i = 0;

        const timer = setInterval(() => {
            setValue(text.slice(0, i + 1));
            i++;

            if (i >= text.length) {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, start]);

    return value;
}