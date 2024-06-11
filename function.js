let troll = document.getElementById("trollbtn");
let text = document.getElementById("trollText");
let clickCounter = 0;

troll.onclick = function clickCounterIncrease() {
    clickCounter++;
    if (clickCounter == 1) {
        text.textContent = "Are you sure you want to click on this button!"
    }
    if (clickCounter == 2) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}
