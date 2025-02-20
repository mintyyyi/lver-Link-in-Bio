const messages = [
    "-",
    "--",
    "---",
    "----",
    "-----",
    "----- W",
    "----- We",
    "----- Wel",
    "----- Welc",
    "----- Welco",
    "----- Welcom",
    "----- Welcome",
    "----- Welcome -",
    "----- Welcome --",
    "----- Welcome ---",
    "----- Welcome ----",
    "----- Welcome -----",
    "----- Welcome ----",
    "----- Welcome ---",
    "----- Welcome --",
    "----- Welcome -",
    "----- Welcome",
    "----- Welcom",
    "----- Welco",
    "----- Welc",
    "----- Wel",
    "----- We",
    "----- W",
    "-----",
    "----",
    "---",
    "--"
];

let index = 0;

function updateParagraph() {
    document.getElementById("changingParagraph").innerText = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(updateParagraph, 500);
