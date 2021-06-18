const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const bio = document.getElementById("bio");
const bioTwo = document.getElementById("bioTwo");
function  hideElement(element) {
    if (element.style.display !== "none"){
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}
function hideBio() {
    hideElement(bio);
}
function hideBioTwo() {
    hideElement(bioTwo);
}
firstButton.addEventListener('click', hideBio);
secondButton.addEventListener('click', hideBioTwo);