// import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScroll } from "./Hooks/useScroll";
import { useScrollThrottle } from "./Hooks/useScrollThrottle";
import { useScrollObserver } from "./Hooks/useScrollObserver";

function App() {
    // const mouseLocation = useMouseLocation({ x: 0, y: 0 });

    // const isBottom = useScrollThrottle();
    // console.log("useScrollThrottle", useScrollThrottle());
    const isBottom = useScrollObserver();
    console.log("isBottom: ", isBottom);

    return (
        <div
            className="target-box"
            style={{ backgroundColor: "blue", height: 1000, width: 50 }}
        ></div>
    );
}

export default App;
