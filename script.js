const form = document.getElementById("movie-form");
console.log(form);
const newMovie = document.getElementById("new-movie");
console.log(newMovie);
const container = document.getElementById("movie-container");
console.log(container);
const url = "http://localhost:3000/movies";

// fetching json from database
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // iterating through data array full of objects
        for (let item of data) {
            // creating div container for moviecard
            let movieCard = document.createElement("div");

            // call render functions and add movieCard to container
            renderTitle(item, movieCard);
            renderCreated(item, movieCard);
            renderWatched(item, movieCard);
            container.appendChild(movieCard);
        }
    });

// grab title text from json item and render it in an element
function renderTitle(movieObj, card) {
    let movieTitle = document.createElement("div");
    movieTitle.innerText = movieObj.title;
    card.appendChild(movieTitle);
}

// grab created date from json item and render it in an element
function renderCreated(item, movieCard) {
    let movieCreated = document.createElement("div");
    movieCreated.innerText = item.created_at
    movieCard.appendChild(movieCreated);
}

// grab watched boolean from json item and render it in an element
function renderWatched(item, movieCard) {
    let movieWatched = document.createElement("div");
    if (item.watched) {
        movieWatched.innerText = "Watched"
    } else {
        movieWatched.innerText = "Not Watched"
    }
    movieCard.appendChild(movieWatched);
}