import NavBar from "./components/NavBar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import { MyContext } from "./context/MyContext";

import "./App.css";

function App() {
    return (
        <MyContext.Provider className="App" value={{ toggle }}>
            <NavBar />
            <main>
                <About />
                <Resume />
                <Projects />
            </main>
        </MyContext.Provider>
    );
}

export default App;
