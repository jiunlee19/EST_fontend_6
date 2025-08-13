import { useEffect } from "react";
import { useState } from "react";

export function useCursorLocation(initVal) {
    const [cursorLocation, setCursorLocation] = useState(
        initVal || { x: null, y: null }
    );

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setCursorLocation({ x: event.x, y: event.y });
        });

        return () => {};
    }, []);

    return cursorLocation;
}
