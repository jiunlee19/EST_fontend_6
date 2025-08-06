function Header() {
    return <header>header</header>;
}

function Footer() {
    return <footer>footer</footer>;
}

function App() {
    const x = 1;
    const y = 2;
    const z = x + y;
    return (
        <>
            <p>hello world</p>
            <p>{x + y}</p>
            <p>{z}</p>

            <p className="hello">hello world</p>
            <p>hello world</p>
            <p id="helloworld">hello world</p>
            <div style={{ backgroundColor: "black", color: "white" }}>
                hello world
            </div>
        </>
    );
}

export default App;
