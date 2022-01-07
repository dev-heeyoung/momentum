const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const selectedImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${selectedImg}`;

document.body.appendChild(bgImg);