// Active-Buttons JavaScript

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var navButton = document.getElementById("navButton");

    if (currentPage === "nav.html" || currentPage === "") {
        navButton.classList.add("active");
    }
});


// Form Container Js

function openForm(formId) {
    document.getElementById(formId).style.display = "flex";
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}



// Cart-Button JavaScript

function toggleBox() {
    var hiddenBox = document.getElementById("hidden-box");
    if (hiddenBox.style.height === "0px" || hiddenBox.style.height === "") {
        hiddenBox.style.height = "50px";
    } else {
        hiddenBox.style.height = "0px";
    }
}
