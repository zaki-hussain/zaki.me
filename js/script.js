function change(element, show) {
    document.getElementById(element).style.display="none";
    document.getElementById(show).style.display="flex";
}

function projects() {
    document.getElementById("right-container").style.maxWidth="25vw";
    document.getElementById("home").style.opacity="0";
    setTimeout(change, 1000, "home", "projects");
}

function about() {
    document.getElementById("right-container").style.maxWidth="25vw";
    document.getElementById("home").style.opacity="0";
    setTimeout(change, 1000, "home", "about");
}

function home() {
    document.getElementById("right-container").style.maxWidth="115.6px";
    document.getElementById("home").style.display="block";
}