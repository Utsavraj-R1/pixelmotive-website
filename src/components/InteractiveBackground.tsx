"use client";
import { useEffect } from "react";

export default function InteractiveBackground() {
    useEffect(() => {
        const move = (e: PointerEvent) => {
            document.documentElement.style.setProperty("--x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--y", `${e.clientY}px`);
        };

        window.addEventListener("pointermove", move, { passive: true });
        return () => window.removeEventListener("pointermove", move);
    }, []);

    return <div className="cursor-splash-bg" />;
}
