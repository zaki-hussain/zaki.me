function change(hide, show, display) {
    document.getElementById(hide).style.display="none";
    document.getElementById(show).style.display=display;
    document.getElementById(show).style.opacity="0";
    setTimeout(visible, 10, show);
}

function visible(element) {
    document.getElementById(element).style.opacity="1";
}

function projects() {
    document.getElementById("right-container").style.maxWidth="30vw";
    document.getElementById("home").style.opacity="0";
    setTimeout(change, 1000, "home", "projects", "flex");
}

function about() {
    document.getElementById("right-container").style.maxWidth="30vw";
    document.getElementById("home").style.opacity="0";
    setTimeout(change, 1000, "home", "about", "flex");
}

function aHome() {
    document.getElementById("right-container").style.maxWidth="115.6px";
    document.getElementById("about").style.opacity="0";
    setTimeout(change, 1000, "about", "home", "block");
}

function pHome() {
    document.getElementById("right-container").style.maxWidth="115.6px";
    document.getElementById("projects").style.opacity="0";
    setTimeout(change, 1000, "projects", "home", "block");
}