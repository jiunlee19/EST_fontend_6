import { useState } from "react";

function App() {
    let [count, setCount] = useState(0);
    let count2 = 0;
    const increment = () => {
        count += 1;
        console.log("Count:", count);
    };

    const increment2 = () => {
        setCount(count + 1);
        console.log("Count:", count);
    };

    const increment3 = () => {
        count2 += 1;
        console.log("Count2:", count2);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={increment2}>Increment</button>
            <div>{count2}</div>
            <button onClick={increment3}>Increment</button>
        </div>
    );
}

export default App;
