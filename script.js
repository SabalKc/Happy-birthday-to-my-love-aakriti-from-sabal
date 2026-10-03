const cake = document.getElementById("cake");

let taps = 0;
const requiredTaps = 8;

cake.addEventListener("click", handleCakeTap);

function handleCakeTap() {
    taps++;

    // Tiny bounce on every tap
    cake.classList.add("cake-tap");

    setTimeout(() => {
        cake.classList.remove("cake-tap");
    }, 180);

    // Create little hearts around the cake
    createTinyHeart();

    if (taps < requiredTaps) {
        return;
    }

    unlockBirthday();
}

function unlockBirthday() {
    // Prevent extra taps
    cake.removeEventListener("click", handleCakeTap);

    document.body.classList.add("birthday-unlocked");

    // Cake explosion
    cake.classList.add("cake-explode");

    // Lots of hearts
    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            createExplosionHeart();
        }, i * 35);
    }

    // Reveal the message
    setTimeout(() => {
        const message = document.createElement("div");

        message.className = "unlock-message";

        message.innerHTML = `
            <div class="unlock-heart">💖</div>
            <h2>You unlocked the surprise!</h2>
            <p>Now come see what I made for you, Aakriti 🫶</p>
        `;

        document.body.appendChild(message);
    }, 900);
}


// Small hearts during normal tapping
function createTinyHeart() {
    const heart = document.createElement("span");

    heart.className = "tiny-heart";
    heart.textContent = ["💗", "💕", "💖", "💓"][Math.floor(Math.random() * 4)];

    heart.style.left = `${45 + Math.random() * 10}%`;
    heart.style.top = `${45 + Math.random() * 10}%`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 900);
}


// Big hearts during the final explosion
function createExplosionHeart() {
    const heart = document.createElement("span");

    heart.className = "explosion-heart";
    heart.textContent = ["💖", "💕", "💗", "❤️", "✨", "🌸"][
        Math.floor(Math.random() * 6)
    ];

    heart.style.left = `${50 + (Math.random() - 0.5) * 70}%`;
    heart.style.top = `${50 + (Math.random() - 0.5) * 70}%`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1800);
}
