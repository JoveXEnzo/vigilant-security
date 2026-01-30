function loadHTMLBlock(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load navbar and footer into placeholders
loadHTMLBlock("navbar", "navbar.html");
loadHTMLBlock("footer", "footer.html");
