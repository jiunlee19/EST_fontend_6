import NavBar from "./components/NavBar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <main>
                <About />
                <Resume />
                <Projects />
            </main>
        </div>
    );
}

export default App;
