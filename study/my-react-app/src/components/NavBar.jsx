import styles from "./NavBar.module.scss";

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
                    <a href="#About">Ji Un Lee</a>
                </h1>
                <h2>Frontend Engineer</h2>
                <p>I build Web with semantic HTML and sufficient JS</p>
                <ul>
                    {menus.map((menu, index) => {
                        return <MenuComponent key={index} menu={menu} />;
                    })}
                </ul>
            </nav>
            <nav>
                <ul className={styles["social-links"]}>
                    <li>Github</li>
                    <li>Velog</li>
                    <li>Linkedin</li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar;
