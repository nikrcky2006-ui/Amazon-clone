let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;
    });
});

const heroSection = document.querySelector(".hero-section");

const images = [
    "hero_image/hero-image.jpg",
    "hero_image/hero3_image.jpg",
    "hero_image/hero4_image.jpg",
    "hero_image/hero5_image.jpg",
    "hero_image/hero6_image.jpg",
];

let currentImage = 0;

function changeHeroImage() {
    heroSection.style.backgroundImage =
        `url('${images[currentImage]}')`;

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }
}

changeHeroImage();

setInterval(changeHeroImage, 3000);
