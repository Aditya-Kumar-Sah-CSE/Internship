// select all button 
const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// console.log(filterButtons,filterCards);




// define filter cards 
const filterCards = e  => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

    console.log(e.target);


// iterate over each filterable card 
filterableCards.forEach(card =>{
    // Add "hide" class to hide the card initially 
    card.classList.add("hide");
    // Check if the card match the selected filter or "all" is selected 
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide");
    }
});
};
// Add click listener to each filter button 
filterButtons.forEach(button => button.addEventListener("click",filterCards) );

