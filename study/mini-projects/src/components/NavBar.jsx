import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-logo">
                내 홈페이지
            </NavLink>
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            "nav-links" + (isActive ? " activated" : "")
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            "nav-links" + (isActive ? " activated" : "")
                        }
                    >
                        Resume
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            "nav-links" + (isActive ? " activated" : "")
                        }
                    >
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
