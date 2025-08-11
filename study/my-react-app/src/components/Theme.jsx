import styles from "./Theme.module.scss";
import { useState } from "react";

function Theme() {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => setToggle(!toggle);

    return (
        <div>
            <div
                className={styles["toggle-wrapper"]}
                onClick={onToggle}
                // boolean 값을 문자열로 변환해주는 것이 더 명확합니다.
                toggle={toggle.toString()}
            >
                <div
                    className={styles["toggle-circle"]}
                    toggle={toggle.toString()}
                />
            </div>
            <h3>{toggle ? "Dark" : "Light"}</h3>
        </div>
    );
}
export default Theme;
