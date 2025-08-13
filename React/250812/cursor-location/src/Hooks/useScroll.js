import { useEffect, useState, useRef } from "react";

export function useScroll() {
    const [isBottom, setIsBottom] = useState(false);
    // useRef를 사용하여 lastTime 변수가 리렌더링 시 초기화되지 않도록 합니다.
    const lastTime = useRef(0);
    const delay = 3000;

    useEffect(() => {
        const handleScroll = () => {
            const currentTime = Date.now();
            if (currentTime - lastTime.current >= delay) {
                lastTime.current = currentTime;

                setIsBottom(
                    window.innerHeight +
                        document.documentElement.scrollTop +
                        10 >=
                        document.documentElement.offsetHeight
                );
                console.log("scrolling...");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup 함수를 통해 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isBottom;
}
