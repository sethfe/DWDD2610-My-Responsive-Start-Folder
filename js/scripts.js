import { reviews} from "../data/reviews.js";
console.log(reviews);

// create empty card
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {

    // create a section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')


    for (let step = 0; step<reviews[x].stars; step++) {
        const reviewIndicator = document.createElement('img', img.alt = "crown icon")
        reviewIndicator.src = "../images/crown-solid.svg" 
        myRating.appendChild(reviewIndicator)
    }
    

    // build the figure with child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);

    // add a new card to a page
    myTarget.appendChild(mySection);
} // end for loop

// nav menu starts here
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerMenu").classList.toggle("open");
}

const x = document.getElementById('hamburgerMenu');
x.onclick = toggleMenu;


// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear(); //end
