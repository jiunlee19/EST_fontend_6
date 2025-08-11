import { LanguageProvider } from "./LanguageProvider.jsx";
import LangSelector from "./LangSelector.jsx";
import Contents from "./Contents.jsx";

function App() {
    return (
        <div className="App">
            {/* Provider로 하위 컴포넌트들을 감싸면, 
                해당 컴포넌트들은 useLang 훅을 통해 상태를 공유할 수 있음 */}
            <LanguageProvider>
                <Contents />
                <LangSelector />
            </LanguageProvider>
        </div>
    );
}

export default App;
