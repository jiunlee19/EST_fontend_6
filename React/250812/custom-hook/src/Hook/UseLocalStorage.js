// 'use'로 시작하는 함수로 전체 로직을 감쌉니다.
// React의 Custom Hook 규칙을 따르기 위해 함수명을 'use'로 시작합니다.
export default function useLocalStorage() {
    // useState의 초기값으로 로컬 스토리지의 값을 우선적으로 사용합니다.
    // 최초 렌더링 시 로컬 스토리지에서 'myLang' 키의 값을 가져와 상태의 초기값으로 설정합니다.
    // 값이 없으면 기본값으로 'ko'를 사용합니다.
    const [myLang, setMyLang] = useState(
        localStorage.getItem("myLang") || "ko"
    );

    // select의 onChange에 연결될 함수입니다.
    // select 요소의 값이 변경될 때 호출될 함수를 정의합니다.
    const selectedLang = (e) => {
        const newLang = e.target.value;
        // 로컬 스토리지와 state를 함께 업데이트합니다.
        // 사용자가 언어를 변경하면 로컬 스토리지와 컴포넌트의 상태를 동시에 업데이트하여
        // 데이터의 동기화를 유지합니다.
        localStorage.setItem("myLang", newLang);
        setMyLang(newLang);
    };

    // 사용하는 컴포넌트에서 필요한 값과 함수를 객체로 묶어 반환합니다.
    // 다른 컴포넌트에서 이 Hook을 사용하여 로컬 스토리지에 접근하고 상태를 관리할 수 있도록 합니다.
    return { myLang, selectedLang };
}
