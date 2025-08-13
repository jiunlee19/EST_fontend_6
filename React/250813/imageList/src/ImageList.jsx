import { useEffect, useState, useCallback } from "react";
import { useScrollObserver } from "./Hooks/useScrollObserver";

export default function ImageList() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    // 1. useScrollObserver가 돌려준 두 개의 값을 변수에 저장합니다.
    const [targetRef, isBottom] = useScrollObserver();

    // 2. 이미지 로딩 함수
    const fetchImages = async (pageNum) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${pageNum}&limit=5`
            );
            if (!response.ok) {
                throw new Error("네트워크에 문제가 있습니다.");
            }
            const data = await response.json();
            setImages((prev) => [...prev, ...data]);
        } catch (error) {
            console.error("이미지를 불러오는 중 에러가 발생했습니다.", error);
        } finally {
            setIsLoading(false);
        }
    };

    // 3. 페이지 번호가 바뀔 때마다 새 이미지를 불러옵니다.
    useEffect(() => {
        fetchImages(page);
    }, [page]);

    // 4. 맨 아래에 닿으면 다음 페이지 번호로 업데이트합니다.
    useEffect(() => {
        if (isBottom && !isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [isBottom]);

    return (
        <div>
            <h1>이미지 목록</h1>
            <ul>
                {images.map((image) => (
                    <li
                        key={page + "-" + image.id}
                        style={{ marginBottom: "20px" }}
                    >
                        <img
                            src={image.download_url}
                            alt={image.author}
                            width="400"
                        />
                    </li>
                ))}
            </ul>

            {/* 5. 이 div를 감시해서 스크롤이 맨 아래에 닿았는지 확인합니다. */}
            <div ref={targetRef} style={{ height: "50px" }} />

            {isLoading && <p>Loading...</p>}
        </div>
    );
}
