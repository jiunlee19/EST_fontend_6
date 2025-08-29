import React from "react";
import styles from "./Home.module.css";
import DiaryList from "./DiaryList";
import DiaryForm from "./DiaryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
    const { user } = useAuthContext();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}.${String(month).padStart(2, 0)}.${String(
        day
    ).padStart(2, 0)}`;

    const { documents, error } = useCollection("diary");

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className={styles["heart"]}>{formattedDate}의 비밀일기</h2>
                <DiaryForm uid={user.uid} />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul className={styles.content_list}>
                    <DiaryList list={documents} />
                </ul>
            </section>
        </div>
    );
}
