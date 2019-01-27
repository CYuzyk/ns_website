function setColor() {
    var colors = [" red", " green", " blue", "orange", "yellow"],
        css = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("body").className = document.querySelector("body").className + css;
}
window.addEventListener("load", setColor);
