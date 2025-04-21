const title = document.getElementById("here")
const urls = {}
window.location.href.split("?").forEach(element => {
    urls[element.split("=")[0]] = element.split("=")[1]
});
title.innerHTML += " " + (urls["my_name"] || "")