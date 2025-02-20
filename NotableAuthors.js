document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Notable Authors",
        "Noteworthy Authors",
        "Renowned Authors",
        "Star Singers",
        "Vocal Virtuosos",
        "Iconic Singers",
        "Prominent Writers",
        "Illustrious Writers"
    ];

    let index = 0;

    function update() {
        const paragraph = document.getElementById("changer");
        if (paragraph) { 
            paragraph.innerText = messages[index];
            index = (index + 1) % messages.length;
        } else {
            console.error("Element with ID 'changer' not found.");
        }
    }

    setInterval(update, 1500);
});
