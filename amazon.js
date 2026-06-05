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
    "amazon _logo/hero-image.jpg",
    "amazon _logo/hero3_image.jpg",
    "amazon _logo/hero4_image.jpg",
    "amazon _logo/hero5_image.jpg",
    "amazon _logo/hero6_image.jpg"
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
