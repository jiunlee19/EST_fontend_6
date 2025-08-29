import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";

export default function DiaryList({ list }) {
    return (
        <>
            {list.map((doc, i) => {
                <li key={i}>
                    <article className={styles["diary-article"]}>
                        <h3 className={styles["article-title"]}>
                            {doc.diaryTitle}
                        </h3>
                        <time
                            className={styles["article-time"]}
                            dateTime="2023-03-15"
                        >
                            2023.02.24.THU
                        </time>
                        <p className={styles["article-content"]}>
                            {doc.diaryContent}
                        </p>

                        <div className={styles["button-group"]}>
                            <button type="button">
                                <img src={iconEdit} alt="수정" />
                            </button>
                            <span></span>
                            <button type="button">
                                <img src={iconDelete} alt="삭제" />
                            </button>
                        </div>
                    </article>
                </li>;
            })}
        </>
    );
}
