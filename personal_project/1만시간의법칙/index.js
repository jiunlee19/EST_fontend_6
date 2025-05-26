document.addEventListener("DOMContentLoaded", () => {
    // 버튼 요소 선택
    const button = document.querySelector(".result-button-wrap button");

    // 입력 필드 선택
    const goalInput = document.getElementById("goal");
    const traingTimeInput = document.getElementById("everyday-traing-time");

    // 버튼 클릭 시 이벤트 실행
    button.addEventListener("click", () => {
        document.querySelector(".result-loading").hidden = false;

        const goal = goalInput.value;
        const effort = 10000 / traingTimeInput.value;

        console.log("목표:", goal);
        console.log("하루 훈련 시간:", effort);

        let goalResult = document.getElementById("goal-result");
        let daysToTrainResult = document.getElementById("days-to-train-result");

        goalResult.innerHTML = goal;
        daysToTrainResult.innerHTML = effort;

        setTimeout(() => {
            document.querySelector(".result-loading").hidden = true;
            document.querySelector(".result").hidden = false;
        }, 2000);
    });
});
