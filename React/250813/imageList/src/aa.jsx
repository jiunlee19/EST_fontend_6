import { useEffect, useState, useRef } from "react";

function ImageList() {
    const [images, setImages] = useState([]);
    const [isBottom, setIsBottom] = useState(false);
    const [page, setPage] = useState(1);

    const bottomRef = useRef(null);

    // const imgList = async () => {
    //   try {
    //     const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=15`);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setImages(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    async function imgList() {
        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=2&limit=15`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setImages(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        imgList();
        if (isBottom) {
            imgList();
        }
    }, [isBottom]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsBottom(true);

                    console.log("끝이다!");
                } else {
                    setIsBottom(false);
                }
            },
            {
                threshold: 0.8,
            }
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [images]);

    return (
        <ul
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
            }}
        >
            {images.map((img, index) => {
                return (
                    <li
                        key={img.id}
                        ref={index === images.length - 1 ? bottomRef : null}
                        style={{
                            listStyle: "none",
                            width: "100%",
                            height: "300px",
                            border: "1px solid #ccc",
                            borderRadius: "20px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={img.download_url}
                            alt={img.author}
                            style={{ width: "600px", objectFit: "cover" }}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

function App() {
    return (
        <div>
            <ImageList />
        </div>
    );
}

export default App;
