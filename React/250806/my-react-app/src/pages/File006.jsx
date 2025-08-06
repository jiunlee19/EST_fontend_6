import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    const [blogList, setBlogList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/blog`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBlogList(data);
                setLoaded(true);
            });
    }
    return (
        <>
            {blogList.map((blog, index) => {
                return (
                    <section key={index}>
                        <h3>{blog.title}</h3>
                        <p>{blog.author}</p>
                        <p>{blog.date}</p>
                        <Link to={`/blog/${index}`}>Read more</Link>
                    </section>
                );
            })}
        </>
    );
}

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/blog/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBlog(data);
                setLoaded(true);
            });
    }
    {
        return (
            <div>
                {blog ? (
                    <>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <p>작성자: {blog.author}</p>
                        <p>작성일: {blog.created_at}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

function File006() {
    return (
        <BrowserRouter>
            <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ol>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default File006;
