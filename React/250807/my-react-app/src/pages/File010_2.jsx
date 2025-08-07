import { useState, createContext } from "react";

const MyContext = createContext({
    count: 0,
});

function A() {
    return (
        <div>
            <h2>Component A</h2>
            <B />
        </div>
    );
}

function B() {
    return (
        <div>
            <h2>Component B</h2>
            <C />
        </div>
    );
}

function C() {
    return (
        <div>
            <h2>Component C</h2>
            <MyContext.Consumer>
                {/* 
                {({ count }) => (
                    <p>Count from context: {count}</p>
                )} 
                 */}
                {(value) => <p>Count from context: {value.count}</p>}
            </MyContext.Consumer>
        </div>
    );
}

function App() {
    return (
        <>
            <div>
                <h1>Counter</h1>
                <MyContext.Provider value={{ count: 10 }}>
                    <A />
                </MyContext.Provider>
            </div>
        </>
    );
}

export default App;
