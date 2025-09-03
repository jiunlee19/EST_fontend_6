import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryList({ documents }) {
    const { deleteDocument } = useFirestore("diary");

    function formattedTime(seconds) {
        const docDate = new Date(seconds * 1000);
        const year = docDate.getFullYear();
        const month = docDate.getMonth() + 1;
        const day = docDate.getDate();

        const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const dayOfWeek = daysOfWeek[docDate.getDay()];
        const formattedDate = `${year}.${String(month).padStart(2, 0)}.${String(
            day
        ).padStart(2, 0)}.${dayOfWeek}`;

        return formattedDate;
    }

    return (
        <>
            {documents.map((doc, i) => {
                return (
                    <li key={doc.id}>
                        <article className={styles["diary-article"]}>
                            <h3 className={styles["article-title"]}>
                                {doc.diaryTitle}
                            </h3>
                            <time
                                className={styles["article-time"]}
                                dateTime={formattedTime(doc.createdTime.seconds)
                                    .replaceAll(".", "-")
                                    .slice(0, -4)}
                            >
                                {formattedTime(doc.createdTime.seconds)}
                            </time>
                            <p className={styles["article-content"]}>
                                {doc.diaryContent}
                            </p>

                            <div className={styles["button-group"]}>
                                <button type="button">
                                    <img src={iconEdit} alt="수정" />
                                </button>
                                <span></span>
                                <button
                                    type="button"
                                    onClick={() => deleteDocument(doc.id)}
                                >
                                    <img src={iconDelete} alt="삭제" />
                                </button>
                            </div>
                        </article>
                    </li>
                );
            })}
        </>
    );
}
