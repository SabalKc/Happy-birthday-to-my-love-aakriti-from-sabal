const cake = document.getElementById("cake");

let taps = 0;
const requiredTaps = 8;

cake.addEventListener("click", handleCakeTap);

function handleCakeTap() {
    taps++;

    cake.classList.add("cake-tap");

    setTimeout(() => {
        cake.classList.remove("cake-tap");
    }, 180);

    createTinyHeart();

    if (taps === requiredTaps) {
        unlockBirthday();
    }
}

function unlockBirthday() {
    cake.removeEventListener("click", handleCakeTap);

    document.body.classList.add("birthday-unlocked");
    cake.classList.add("cake-explode");

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            createExplosionHeart();
        }, i * 35);
    }

    setTimeout(() => {
        showWelcome();
    }, 1000);
}

function showWelcome() {
    const welcome = document.createElement("div");

    welcome.className = "welcome-screen";

    welcome.innerHTML = `
        <div class="welcome-heart">💖</div>

        <h2>Happy Birthday, Aakriti</h2>

        <p>
            I made a little corner of the internet
            just for you. 🫶
        </p>

        <button id="enterHeart">
            ENTER MY HEART ❤️
        </button>
    `;

    document.body.appendChild(welcome);

    document
        .getElementById("enterHeart")
        .addEventListener("click", enterHeart);
}

function enterHeart() {
    const welcome = document.querySelector(".welcome-screen");

    welcome.classList.add("welcome-exit");

    setTimeout(() => {
        welcome.remove();
        showMainPage();
    }, 800);
}

function showMainPage() {
    const main = document.createElement("main");

    main.className = "main-page";

    main.innerHTML = `
        <div class="main-content">

            <div class="small-label">
                MADE WITH LOVE BY SABAL
            </div>

            <h1>
                For My Aakriti 💖
            </h1>

            <p>
                A little something I made
                especially for you...
            </p>

        </div>
    `;

    document.body.appendChild(main);
}

function createTinyHeart() {
    const heart = document.createElement("span");

    heart.className = "tiny-heart";

    heart.textContent =
        ["💗", "💕", "💖", "💓"][
            Math.floor(Math.random() * 4)
        ];

    heart.style.left =
        `${45 + Math.random() * 10}%`;

    heart.style.top =
        `${45 + Math.random() * 10}%`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 900);
}

function createExplosionHeart() {
    const heart = document.createElement("span");

    heart.className = "explosion-heart";

    heart.textContent =
        ["💖", "💕", "💗", "❤️", "✨", "🌸"][
            Math.floor(Math.random() * 6)
        ];

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 300;

    heart.style.setProperty(
        "--x",
        Math.cos(angle) * distance
    );

    heart.style.setProperty(
        "--y",
        Math.sin(angle) * distance
    );

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1800);
}
