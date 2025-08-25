interface Character {
    nickName: string;
}

interface Bird {
    fly: number;
}

interface BirdCharacter extends Character, Bird {
    level: number;
}

// Character의 nickname
// Bird의 fly
// BirdCharacter의 level
// 세 가지 값 모두 갖고 있어야 된다.
const birdChar: BirdCharacter = {
    nickName: "Gary",
    fly: 10,
    level: 1,
};
