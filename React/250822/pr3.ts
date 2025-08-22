// 적절한 반환 타입을 지정하세요
function logMessage(message): void {
    console.log(message);
}

function throwError(message): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("무한 루프");
    }
}
