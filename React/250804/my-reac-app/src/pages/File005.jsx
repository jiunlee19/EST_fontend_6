import "../css/File005.css";
import { useState } from "react";
import { SyncLoader } from "react-spinners";

function Profile({ item }) {
    const [loading, setLoading] = useState(true);
    const imageUrl = `https://picsum.photos/200/200`;

    return (
        <div className="profile">
            {loading && (
                <div>
                    <h3>로딩 중</h3>
                    <SyncLoader color="skyblue" />
                </div>
            )}
            <img
                src={imageUrl + `?random=${item.id}`}
                alt={item.name}
                onLoad={() => setLoading(false)}
            />

            <div className="title">
                <h2>{item.name}</h2>
                <LevelComponent level={item.level} />
            </div>
            <p>
                <span>직업: </span>
                <span>
                    {item.class} (Lv. {item.level})
                </span>
            </p>
            <CurrentMaxComponent
                classify={`체력`}
                current={item.health.current}
                max={item.health.max}
            />
            <CurrentMaxComponent
                classify={`마나`}
                current={item.mana.current}
                max={item.mana.max}
            />
            <p>
                <span>특성: </span>
                <span>만능형</span>
            </p>
            <p>
                <span>상태: </span>
                <span>{item.status}</span>
            </p>
            <p>
                <span>길드: </span>
                <span>{item.guild}</span>
            </p>
            <ArrayComponent classify={`스킬`} array={item.skills} />
            <ArrayComponent classify={`업적`} array={item.achievements} />
        </div>
    );
}

function LevelComponent({ level }) {
    if (level >= 60) {
        return <div className="level legend">Lv. {level}</div>;
    } else if (level >= 50) {
        return <div className="level hero">Lv. {level}</div>;
    } else if (level >= 40) {
        return <div className="level advance">Lv. {level}</div>;
    } else {
        return <div className="level">Lv. {level}</div>;
    }
}
function CurrentMaxComponent({ classify, current, max }) {
    if (current >= max / 2) {
        return (
            <>
                <p className="current-max over50">
                    <span>{classify}: </span>
                    <span>
                        {current}/{max}
                    </span>
                </p>
            </>
        );
    } else {
        return (
            <>
                <p className="current-max">
                    <span>{classify}: </span>
                    <span>
                        {current}/{max}
                    </span>
                </p>
            </>
        );
    }
}
function ArrayComponent({ classify, array }) {
    console.log(classify, array);
    return (
        <>
            <p>{classify}: </p>
            {array.map((element, index) => {
                return (
                    <span className="element" key={index}>
                        {element}
                    </span>
                );
            })}
        </>
    );
}
function File005() {
    const items = [
        {
            id: 1,
            name: "드래곤 슬레이어 아리아",
            class: "마법사",
            level: 85,
            health: { current: 450, max: 500 },
            mana: { current: 800, max: 800 },
            skills: ["파이어볼", "아이스 스톰", "텔레포트", "치유의 빛"],
            equipment: {
                weapon: "고대의 지팡이",
                armor: "마법사 로브",
                accessory: "지혜의 반지",
            },
            status: "활성",
            guild: "불꽃의 수호자",
            achievements: ["드래곤 킬러", "마법 마스터", "길드 리더"],
            isOnline: true,
            lastLogin: "2025-08-04T10:30:00Z",
        },
        {
            id: 2,
            name: "강철심장 가렌",
            class: "전사",
            level: 72,
            health: { current: 280, max: 900 },
            mana: { current: 150, max: 200 },
            skills: ["강타", "방어 태세", "돌진"],
            equipment: {
                weapon: "신화급 대검",
                armor: "플레이트 아머",
                accessory: null,
            },
            status: "부상",
            guild: null,
            achievements: ["백전백승", "탱커의 자존심"],
            isOnline: false,
            lastLogin: "2025-08-03T18:45:00Z",
        },
        {
            id: 3,
            name: "바람의 춤꾼 루나",
            class: "궁수",
            level: 45,
            health: { current: 350, max: 350 },
            mana: { current: 0, max: 400 },
            skills: ["연속 사격", "독화살", "은신", "치유의 바람", "폭풍 화살"],
            equipment: {
                weapon: "엘븐 활",
                armor: "가죽 갑옷",
                accessory: "민첩의 목걸이",
            },
            status: "휴식",
            guild: "달빛 사냥꾼",
            achievements: ["명사수"],
            isOnline: true,
            lastLogin: "2025-08-04T09:15:00Z",
        },
    ];
    return (
        <div className="profile-list">
            {items.map((item) => (
                <Profile key={item.id} item={item} />
            ))}
        </div>
    );
}
export default File005;
