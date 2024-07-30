// Nav-Section JavaScript

document.addEventListener("DOMContentLoaded", function() {
    fetch("../../Nav-Section/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
});

// Contact-Section Javascript 

document.addEventListener("DOMContentLoaded", function() {
    fetch("../../Footer-Section/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-section").innerHTML = data;
        });
});