const messages = [
    "Kya haiiii?",
    "Ye option kyu daba rhii 😡",
    "Pweassssssseeeee 🥺",
    "Pookie please...",
    "Ek baar sochleeee!",
    "Tere chutad tod dunga",
    "😭😭",
    "Aesaaaaa mat crowwwwwwwww 🐦‍⬛",
    "zyada ni hora teraaaa ab",
    "Ab toh bolde yesss 🫠🤕"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Increase Yes button size significantly
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize * 1.5;
    yesButton.style.fontSize = `${newSize}px`;
    
    // Calculate new padding based on font size to maintain proportions
    const paddingY = newSize * 0.5;
    const paddingX = newSize * 1.2;
    yesButton.style.padding = `${paddingY}px ${paddingX}px`;

    // Add shake effect to No button
    noButton.classList.add('shake');
    setTimeout(() => {
        noButton.classList.remove('shake');
    }, 500);
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Create floating hearts with more variety
function createHearts() {
    const bg = document.getElementById('bg-hearts');
    const heartSymbols = [
        '❤️', '💖', '💕', '💗', '💓', '🌸', '✨', '🌹', 
        '🦋', '🍬', '🍭', '🎀', '💝', '💘', '💌', '🧸', '🍓'
    ];
    
    const count = 20; // Increased count for more density
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Randomly choose a symbol
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            
            // Random properties
            const size = Math.random() * 25 + 10; // 10px to 35px
            const left = Math.random() * 100; // 0 to 100vw
            const duration = Math.random() * 10 + 5; // 5s to 15s
            const delay = Math.random() * 5;
            const blur = Math.random() * 1.5;
            
            heart.style.left = `${left}vw`;
            heart.style.fontSize = `${size}px`;
            heart.style.animation = `floatUp ${duration}s linear infinite`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.filter = `blur(${blur}px)`;
            heart.style.opacity = Math.random() * 0.6 + 0.3;
            
            bg.appendChild(heart);
            
            // Remove heart after animation to keep DOM clean
            setTimeout(() => {
                heart.remove();
            }, (duration + delay) * 1000);
        }, i * 300);
    }
}

// Initial call and periodic generation
createHearts();
setInterval(createHearts, 5000);