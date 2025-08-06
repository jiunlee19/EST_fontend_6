// npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
// 1. BrowserRouter 컴포넌트 :  UI와 URL을 연결합니다. 마치 MPA과 같이 URL을 사용할 수 있게합니다.
// 2. Routes 컴포넌트 : URL이 변경되면  `<Routes>` 는 모든 자식 `<Route>`
// 를 살펴보고 가장 알맞는 것을 매칭합니다.
// 3. Route 컴포넌트 : 현재 URL과 매칭된 UI를 렌더링 하는 역할을 합니다.
