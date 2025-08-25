interface BaseItem {
    id: number;
    name: string;
}
interface Book extends BaseItem {
    author: string;
    pages: number;
}
interface Movie extends BaseItem {
    director: string;
    duration: number;
}

//인터페이스 정의 필요
type User = {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
};

type UserDetails = {
    displayName: string;
    age: number;
    isAdmin: boolean;
};

function processUser(user: User): UserDetails {
    return {
        displayName: user.firstName + " " + user.lastName,
        age: user.age,
        isAdmin: user.role === "admin",
    };
}

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    role: "admin",
};

const details = processUser(user);
