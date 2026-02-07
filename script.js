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
    const newSize = currentSize * 1.6; // Increased multiplier
    yesButton.style.fontSize = `${newSize}px`;
    
    // Calculate new padding
    const paddingY = newSize * 0.5;
    const paddingX = newSize * 1.2;
    yesButton.style.padding = `${paddingY}px ${paddingX}px`;

    // If the button gets very large, ensure it covers the screen
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

    // Add shake effect to No button
    noButton.classList.add('shake');
    setTimeout(() => {
        noButton.classList.remove('shake');
    }, 500);
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


// Initial call and periodic generation
createHearts();
setInterval(createHearts, 5000);