const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const thirdButton = document.getElementById("thirdButton");
const bio = document.getElementById("bio");
const bioTwo = document.getElementById("bioTwo");
const bioThree = document.getElementById("bioThree");
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
function hideBioThree() {
    hideElement(bioThree);
}
firstButton.addEventListener('click', hideBio);
secondButton.addEventListener('click', hideBioTwo);
thirdButton.addEventListener('click', hideBioThree);