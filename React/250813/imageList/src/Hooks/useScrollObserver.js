import { useState, useEffect, useRef } from "react";

export function useScrollObserver() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 1.0,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // [감시할 대상(ref), 맨 아래 닿았는지 여부(boolean)] 이렇게 두 개의 값을 돌려줍니다.
    return [ref, isIntersecting];
}
