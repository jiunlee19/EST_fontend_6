import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

// Custom Hook: useLang
export const useLang = () => {
    const context = useContext(LanguageContext);

    // Provider 범위 밖에서 사용 시 에러 발생
    if (context === undefined) {
        throw new Error("useLang must be used within a LanguageProvider");
    }

    return context;
};
