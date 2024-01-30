const slides = [
  {
    image: "./images/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./images/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./images/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./images/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Création des constantes et récupération des éléments HTML
const banner = document.querySelector(".banner-img");
const bullets = document.querySelectorAll(".dots .dot");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const taglineElement = document.querySelector(".tagline p");

let i = 0;

function activeSlide() {
  //Permet de changer les images
  banner.src = slides[i].image;
  //Affichage du texte targLine en les récupérant dans le tableau
  taglineElement.innerHTML = slides[i].tagLine;

  //Mettre à jour les points avec le fond blanc pour celui qui est sélectionnée
  bullets.forEach((bullet, index) => {
    if (index === i) {
      bullet.classList.add("dot_selected");
    } else {
      bullet.classList.remove("dot_selected");
    }
  });
}

//Permet de rendre les points cliquables
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    i = index;
    activeSlide();
    console.log(`Vous avez cliqué sur le point ${index + 1} !`);
    //Permet de définir quel point et sélectionné
  });
});

arrowRight.addEventListener("click", () => {
  i = (i + 1) % slides.length;
  activeSlide();
  console.log("Vous avez cliqué sur la flèche de droite !");
});

arrowLeft.addEventListener("click", () => {
  i = (i - 1 + slides.length) % slides.length;
  activeSlide();
  console.log("Vous avez cliqué sur la flèche de gauche !");
});

// Initialiser le carrousel
activeSlide();