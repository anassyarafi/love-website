let text = "I love you today, tomorrow, and always ❤️ You are the best thing that ever happened to me.";
let index = 0;

let photos = ["img1.JPG", "img2.PNG", "img3.PNG"];
let photoIndex = 0;
let started = false;

function showLove() {
    document.getElementById("bgMusic").play();
    document.getElementById("photo").style.display = "block";

    // Show navigation buttons with animation
    const nav = document.getElementById("navButtons");
    nav.classList.add("show");

    // Hide open button
    document.getElementById("openBtn").style.display = "none";

    updateButtons();

    if (!started) {
        started = true;
        typeWriter();
        createHearts();
    }
}

function typeWriter() {
    if (index < text.length) {
        document.getElementById("message").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

function nextPhoto() {
    if (photoIndex < photos.length - 1) {
        changePhoto(1);
    }
}

function prevPhoto() {
    if (photoIndex > 0) {
        changePhoto(-1);
    }
}

function changePhoto(direction) {
    const photo = document.getElementById("photo");
    photo.style.opacity = 0;

    setTimeout(() => {
        photoIndex += direction;
        photo.src = photos[photoIndex];
        photo.style.opacity = 1;
        updateButtons();
    }, 300);
}

function updateButtons() {
    document.getElementById("prevBtn").disabled = photoIndex === 0;
    document.getElementById("nextBtn").disabled = photoIndex === photos.length - 1;
}

/* Floating hearts */
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "float 5s linear";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}