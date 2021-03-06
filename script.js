const form = document.getElementById("movie-form");
const newMovie = document.getElementById("new-movie");
const container = document.getElementById("movie-container");
const url = "http://localhost:3000/movies";

form.addEventListener("submit", (e) => {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: newMovie.value,
            watched: false,
            created_at: moment().format("LLLL")
        })
    })
    .then(res => res.json())
    .then(data => {
        renderMovieCard(data)
    })

})





// fetching json from database
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // iterating through data array full of objects
        for (let item of data) {
            renderMovieCard(item)
            // creating div container for moviecard
            // let movieCard = document.createElement("div");

            // // call render functions and add movieCard to container
            // renderTitle(item, movieCard);
            // renderCreated(item, movieCard);
            // renderWatched(item, movieCard);
            // container.appendChild(movieCard);
        }
    });

function renderMovieCard(item) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("box", "movieCard", "is-flex", "is-flex-direction-column","is-align-items-center")
    renderTitle(item, movieCard);
    renderCreated(item, movieCard);
    renderWatched(item, movieCard);
    deleteMovieCard(movieCard)
    container.appendChild(movieCard);
}

function deleteMovieCard (movieCard) {
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`
    movieCard.appendChild(deleteButton);
    console.log("delete")

    
}
// grab title text from json item and render it in an element
function renderTitle(movieObj, card) {
    let movieTitle = document.createElement("div");
    movieTitle.classList.add("is-size-4")
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
        movieWatched.classList.add("has-text-grey-lights")
    } else {
        movieWatched.innerText = "Not Watched"
        movieWatched.classList.add("has-text-danger")
    }

    watchedClick(movieWatched)
    movieCard.appendChild(movieWatched);
}

function watchedClick(div) {
  div.addEventListener("click", () => {
    if (div.innerText === "Not Watched") {
      console.log("click")
    }
    
  })
}
function deleteMovieCard (div) {
    div.addEventListener 
}