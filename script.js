/* CUSTOMIZE: Add or change as many messages as you want for the 'No' button */
const messages = [
    "Kya haiiii?",
    "Ye option kyu daba rhii 😡",
    "Pweassssssseeeee 🥺",
    "Pookie please...",
    "Ek baar sochleeee!",
    "😭😭",
    "Aesaaaaa mat crowwwwwwwww 🐦‍⬛",
    "zyada ni hora teraaaa ab",
    "Ab toh bolde yesss 🫠🤕",
    "Dil tod diya mera 💔",
    "Main ro dunga sachi 😢",
    "Chocolate dunga pakka 🍫",
    "Ice cream bhi! 🍦",
    "Maan ja na meri cutie 🧸",
    "Itni nakhre? 😤",
    "Main tere ghar aa jaunga! 🏠",
    "Ab toh button bhi khatam ho jayega!",
    "Okay fine, last chance...",
    "Ab toh 'Yes' hi dabana padega! ✨"
];

let messageIndex = 0;

function playMusic() {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    music.play().then(() => {
        icon.textContent = '🔊';
    }).catch(() => {});
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (music.paused) {
        music.play();
        icon.textContent = '🔊';
    } else {
        music.pause();
        icon.textContent = '🎵';
    }
}

window.addEventListener('load', playMusic);

document.addEventListener('click', function startOnFirstClick() {
    playMusic();
    document.removeEventListener('click', startOnFirstClick);
}, { once: true });

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    /* CUSTOMIZE: Change 1.15 to a higher number to make the Yes button grow even faster */
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize * 1.15;
    yesButton.style.fontSize = `${newSize}px`;
    
    const paddingY = newSize * 0.5;
    const paddingX = newSize * 1.2;
    yesButton.style.padding = `${paddingY}px ${paddingX}px`;

    if (newSize > 100) {
        yesButton.style.position = 'fixed';
        yesButton.style.zIndex = '9999';
        yesButton.style.top = '50%';
        yesButton.style.left = '50%';
        yesButton.style.transform = 'translate(-50%, -50%)';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.display = 'flex';
        yesButton.style.alignItems = 'center';
        yesButton.style.justifyContent = 'center';
        yesButton.style.borderRadius = '0';
    }

    noButton.classList.add('shake');
    setTimeout(() => {
        noButton.classList.remove('shake');
    }, 500);
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}