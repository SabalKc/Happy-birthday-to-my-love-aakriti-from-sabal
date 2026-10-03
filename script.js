const cake = document.getElementById("cake");

let taps = 0;
const requiredTaps = 8;

cake.addEventListener("click", () => {
    taps++;

    // Little reaction on every tap
    cake.style.transform = "scale(0.88)";

    setTimeout(() => {
        cake.style.transform = "";
    }, 120);

    if (taps < requiredTaps) {
        console.log(`Cake taps: ${taps}/${requiredTaps}`);
    }

    if (taps === requiredTaps) {
        unlockBirthday();
    }
});

function unlockBirthday() {
    cake.textContent = "💥";

    setTimeout(() => {
        cake.textContent = "💖";
    }, 500);

    alert("You unlocked the surprise! 💖");
}
