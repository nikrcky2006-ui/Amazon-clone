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
    "Nav_logo/hero-image.jpg",
    "Nav_logo/hero3_image.jpg",
    "Nav_logo/hero4_image.jpg",
    "Nav_logo/hero4_image.jpg",
    "Nav_logo/hero5_image.jpg",
    "Nav_logo/hero6_image.jpg"
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
