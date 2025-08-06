import { useState } from "react";

function One() {
    return <p>one</p>;
}

function Two() {
    return <p>two</p>;
}

function Three() {
    return <p>three</p>;
}

function File009() {
    const [page, setPage] = useState("one");

    // if (page === 'one') {
    //     return (
    //       <>
    //         <button onClick={() => setPage('one')}>One</button>
    //         <button onClick={() => setPage('two')}>Two</button>
    //         <button onClick={() => setPage('three')}>Three</button>
    //         <One />
    //       </>
    //     );
    //   } else if (page === 'two') {
    //     return (
    //       <>
    //         <button onClick={() => setPage('one')}>One</button>
    //         <button onClick={() => setPage('two')}>Two</button>
    //         <button onClick={() => setPage('three')}>Three</button>
    //         <Two />
    //       </>
    //     );
    //   } else if (page === 'three') {
    //     return (
    //       <>
    //         <button onClick={() => setPage('one')}>One</button>
    //         <button onClick={() => setPage('two')}>Two</button>
    //         <button onClick={() => setPage('three')}>Three</button>
    //         <Three />
    //       </>
    //     );
    //   }

    return (
        <>
            <button onClick={() => setPage("one")}>One</button>
            <button onClick={() => setPage("two")}>Two</button>
            <button onClick={() => setPage("three")}>Three</button>
            {page === "one" && <One />}
            {page === "two" && <Two />}
            {page === "three" && <Three />}
        </>
    );
}

export default File009;
