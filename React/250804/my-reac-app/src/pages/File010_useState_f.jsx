function App() {
    let count = 0;
    const increment = () => {
        count += 1;
        console.log("Count:", count);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
