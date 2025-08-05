import styles from "./Pages.module.scss";
function About() {
    return (
        <div id="About" className={styles["page-height"]}>
            <h2>About</h2>
            <p>This is the About page of our application.</p>
            <p>Here you can find information about our project and team.</p>
        </div>
    );
}
export default About;
