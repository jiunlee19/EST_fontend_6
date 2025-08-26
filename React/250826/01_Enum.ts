// 숫자형 Enum
enum Direction {
    Up = 1,
    Down, // 2
    Left, // 3
    Right, // 4
}

console.log(Direction.Up); // 1
console.log(Direction.Down); // 2
console.log(Direction.Left); // 3
console.log(Direction.Right); // 4

// 문자열 Enum
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING",
}

console.log(Status.Active); // ACTIVE
