import { useState } from "react";
import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryForm({ uid }) {
    const [diaryTitle, setDiaryTitle] = useState("");
    const [diaryContent, setDiaryContent] = useState("");
    const { addDocument } = useFirestore("diary");
    // transaction = 'diary' = 컬렉션 이름

    const handleData = (event) => {
        if (event.target.id === "diary-title") {
            setDiaryTitle(event.target.value);
        } else if (event.target.id === "diary-content") {
            setDiaryContent(event.target.value);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addDocument({ diaryTitle, diaryContent, uid });
        // login한 유저의 uid도 같이 저장해야 한다.
        setDiaryTitle("");
        setDiaryContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="a11y-hidden" htmlFor="diary-title">
                일기 제목
            </label>
            <input
                className="input-style"
                id="diary-title"
                type="text"
                placeholder="제목"
                onChange={handleData}
                value={diaryTitle}
                required
            />

            <label className="a11y-hidden" htmlFor="diary-content">
                일기 내용
            </label>
            <textarea
                className={styles["diary-textarea"]}
                id="diary-content"
                placeholder="오늘의 비밀은 무엇인가요?"
                onChange={handleData}
                value={diaryContent}
            ></textarea>
            <button className="black-btn" type="submit">
                작성하기
            </button>
        </form>
    );
}
