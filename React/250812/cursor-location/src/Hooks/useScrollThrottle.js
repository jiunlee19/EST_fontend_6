import { useState, useEffect } from "react";

export function useScrollThrottle() {
    const [isBottom, setIsBottom] = useState(false);

    function throttle(callback, delay) {
        let timer = null;

        return () => {
            if (timer === null) {
                timer = setTimeout(() => {
                    callback();
                    timer = null;
                }, delay);
            }
        };
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsBottom(
                window.innerHeight + document.documentElement.scrollTop + 10 >=
                    document.documentElement.offsetHeight
            );

            console.log("scroll");
        };

        const throttleHandler = throttle(handleScroll, 1000);

        window.addEventListener("scroll", throttleHandler);

        return () => {
            window.removeEventListener("scroll", throttleHandler);
        };
    }, []);

    return isBottom;
}
