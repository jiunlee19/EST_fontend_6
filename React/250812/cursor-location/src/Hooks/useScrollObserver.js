// 옵저버 만든다.
// 관찰 대상: .target-box
// 콜백 함수: console.log("this is bottom");
// 옵션: threshold:1,
import { useState, useRef, useEffect } from "react";

export function useScrollObserver() {
    const [isBottom, setIsBottom] = useState(false);
    const endLineRef = useRef(null);

    useEffect(() => {
        const endLine = document.createElement("div");
        endLine.style.height = "10px";
        document.body.append(endLine);
        endLineRef.current = endLine;

        const observer = new IntersectionObserver(
            (entry) => {
                if (entry[0].isIntersecting) {
                    setIsBottom(true);
                    console.log("this is bottom");
                } else {
                    setIsBottom(false);
                }
            },
            {
                threshold: 1,
            }
        );

        observer.observe(endLineRef.current);

        return () => {
            observer.unobserve(endLineRef.current);
            document.body.removeChild(endLineRef.current);
        };
    }, []);
    return isBottom;
}
