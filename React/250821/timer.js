// 예외처리 목록
// 1. 59보다 큰 숫자가 입력된 경우:자동 환산(90초 -> 1분 30초)
// 2. 음수가 입력된 경우:'00'
// 3. 값이 없는 경우: '0'

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer;
let totalSeconds = 0;
let isRunning = false;

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "START";
        isRunning = false;
    } else {
        const hours = Math.max(0, parseInt(hoursInput.value) || 0);
        const minutes = Math.max(0, parseInt(minutesInput.value) || 0);
        const seconds = Math.max(0, parseInt(secondsInput.value) || 0);
        totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds > 0) {
            isRunning = true;
            startStopBtn.textContent = "PAUSE";
            setInputState(true);
            timer = setInterval(updateTimer, 1000);
        }
    }
}

function updateTimer() {
    if (totalSeconds <= 0) {
        alert("타이머가 종료되었습니다!");
        resetTimer();
        return;
    }

    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursInput.value = String(hours).padStart(2, "0");
    minutesInput.value = String(minutes).padStart(2, "0");
    secondsInput.value = String(seconds).padStart(2, "0");
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;

    startStopBtn.textContent = "START";
    hoursInput.value = "00";
    minutesInput.value = "01";
    secondsInput.value = "00";
    setInputState(false);
}

function setInputState(isReadOnly) {
    hoursInput.readOnly = isReadOnly;
    minutesInput.readOnly = isReadOnly;
    secondsInput.readOnly = isReadOnly;
}

function validateAndFormatInput(input) {
    let value = parseInt(input.value) || 0;

    if (value < 0) {
        value = 0;
    }

    input.value = String(value).padStart(2, "0");
}

[hoursInput, minutesInput, secondsInput].forEach((input) => {
    input.addEventListener("blur", () => validateAndFormatInput(input));
});

startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);
