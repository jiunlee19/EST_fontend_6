import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </div>
    );
}

export default App;
