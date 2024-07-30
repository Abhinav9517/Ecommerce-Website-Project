// Navbar JavaScript

document.addEventListener("DOMContentLoaded", function() {
    fetch("../Nav-Section/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
});

// Contact-section JavaScript


document.addEventListener("DOMContentLoaded", function() {
    fetch("../Footer-Section/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-section").innerHTML = data;
        });
});



// Active-Buttons JavaScript

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var homeButton = document.getElementById("homeButton");

    if (currentPage === "index.html" || currentPage === "") {
        homeButton.classList.add("active");
    }
});

// Products- Scroller Button JavaScript

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('left-arrow').addEventListener('click', function() {
        document.getElementById('products').scrollBy({
            left: -200, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    document.getElementById('right-arrow').addEventListener('click', function() {
        document.getElementById('products').scrollBy({
            left: 200, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });
});

// CHAT-BOT JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('chatbot-toggle');
    var chatbot = document.getElementById('chatbot');

    toggleButton.addEventListener('click', function() {
        if (chatbot.style.display === 'none' || chatbot.style.display === '') {
            chatbot.style.display = 'block';
        } else {
            chatbot.style.display = 'none';
        }
    });
});


function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = "I'm just a simple bot!";
        chatBox.appendChild(botMessage);

        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}