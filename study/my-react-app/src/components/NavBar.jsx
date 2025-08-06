import styles from "./NavBar.module.scss";
import gitIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png";
import velogIcon from "../assets/velog.png";
import data from "../data/infoSummary.json";

const menus = ["About", "Resume", "Projects"];

function MenuComponent({ menu }) {
    return (
        <>
            <li>
                <a href={"#" + menu}>{menu}</a>
            </li>
        </>
    );
}

function NavBar() {
    return (
        <header>
            <nav className="page-links">
                <h1>
                    <a href="#About">{data.name}</a>
                </h1>
                <h2>{data.position}</h2>
                <p>{data.description}</p>
                <ul>
                    {menus.map((menu, index) => {
                        return <MenuComponent key={index} menu={menu} />;
                    })}
                </ul>
            </nav>
            <nav>
                <ul className={styles["social-links"]}>
                    <li>
                        <a href="#">
                            <img src={gitIcon} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={linkedInIcon} alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={velogIcon} alt="velog" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;
