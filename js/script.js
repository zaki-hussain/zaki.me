function swapContent(id, flex) {
    var content = document.getElementById("content");
    content.style.flex = flex;
    content.style.opacity = "0";
    setTimeout(() => {
        content.innerHTML = document.getElementById(id).innerHTML;
        content.style.opacity = "1";
    }, 500)
}