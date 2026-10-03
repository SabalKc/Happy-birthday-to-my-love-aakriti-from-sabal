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


/* =========================
   MAIN LOVE LETTER
========================= */

function showMainPage() {
    const main = document.createElement("main");

    main.className = "main-page";

    main.innerHTML = `
        <div class="love-letter">

            <div class="small-label">
                WRITTEN BY SABAL ✍️
            </div>

            <p class="diary-note">
                I wrote this first with my own hands
                in my diary... because sometimes words
                say what the heart cannot. 💖
            </p>

            <h1 class="poem-title">
                A Poem for My Cool Gang 🌹
            </h1>

            <div class="poem">

                <p>What's the bond we'd make,</p>
                <p>You're so gorgeous, you make my heart awake,</p>

                <p>Will love you forever until my last breath,</p>
                <p>And will make no more mistakes.</p>

                <p>Through every smile and every tear,</p>
                <p>I'll be right beside you, year after year.</p>

                <p>Through every storm, through every rain,</p>
                <p>I'll choose you over and over again.</p>

                <p>You're the little peace my heart wants to keep,</p>
                <p>The sweetest thought that follows me to sleep.</p>

                <p>And if tomorrow brings a brand-new view,</p>
                <p>I'd still find my way back to you. 💖</p>

            </div>

            <div class="poem-ending">

                <p>
                    And NOWWWW... hope U like that 💖💖
                </p>

                <button id="kabitaButton">
                    ABA KABITA SURU GARCHU 😎❤️
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(main);

    document
        .getElementById("kabitaButton")
        .addEventListener("click", showKabita);
}


/* =========================
   NEPALI KABITA
========================= */

function showKabita() {
    const main = document.querySelector(".main-page");

    main.innerHTML = `
        <div class="love-letter">

            <div class="small-label">
                MERI MAYA AAKRITI ❤️
            </div>

            <h1 class="poem-title">
                मेरी माया आकृति ब्याडी 😋
            </h1>

            <div class="poem nepali-poem">

                <p>Bihanw utxu timro yaadh aauxa,</p>
                <p>Maya timro yaadh le nikai satauxa.</p>

                <p>Timi meri Aakriti nai hau,</p>
                <p>Basxau timi nikai tada hau,</p>
                <p>Basxau timi nikai tada hau.</p>

                <p>
                    Sansar yo duemukhi, vanne yeuta garne yeuta garxan,
                </p>

                <p>
                    Sabal hun yesto pradi, timro lagi sacchi jyanai dinxan. 🤣
                </p>

                <p>Timro muskan le mero din sajauxa,</p>
                <p>Timro ek nazar le mutu nai ramauxa.</p>

                <p>Timi xau ra ta yo man le maya bujhxa,</p>
                <p>Timi bina yo mutu kata kata harauxa.</p>

                <p>Tada xau timi, tara mutu mai xau,</p>
                <p>Mero harek sochma timi nai xau.</p>

                <p>Jindagi le jata tira lagos malai,</p>
                <p>
                    Mero man le rojney chai timi nai hau. ❤️😭
                </p>

            </div>

            <div class="humor-transition">

                <div class="small-label">
                    OKAY... ENOUGH EMOTIONAL SABAL 😂
                </div>

                <h2>
                    Now let the idiot return. 🗿
                </h2>

                <p>
                    Because obviously I couldn't make a whole
                    website without annoying you a little. 😭
                </p>

                <button id="humorButton">
                    SABAL'S HUMOR IS BACK 😂
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("humorButton")
        .addEventListener("click", showHumor);
}
function showHumor() {
    const main = document.querySelector(".main-page");

    main.innerHTML = `
        <div class="love-letter humor-section">

            <div class="small-label">
                SABAL'S HUMOR BACK 😂
            </div>

            <h1 class="poem-title">
                Aakriti, meine baddie 😎
            </h1>

            <div class="humor-card">

                <p>
                    “You're gorgeous.
                    Unfortunately, you know it.” 💀
                </p>

                <p>
                    “You somehow manage to live
                    in my head rent-free.”
                </p>

                <p>
                    “Your attitude deserves
                    its own warning label.” 😂
                </p>

                <p>
                    “And somehow...
                    I still adore you.” ❤️
                </p>

            </div>

            <div class="poem-ending">

                <p>
                    Okay okay... flirting quota complete. 😭
                </p>

                <button id="messageButton">
                    THERE'S MORE... 🫶
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("messageButton")
        .addEventListener("click", showFinalMessage);
}

/* =========================
   LITTLE HEARTS
========================= */

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


/* =========================
   EXPLOSION HEARTS
========================= */

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
