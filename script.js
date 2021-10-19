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
        // creating div containers for moviecard and movie title
      let movieCard = document.createElement("div");
      let movieTitle = document.createElement("div");
      let movieCreated = document.createElement("div");

      // setting the innerText of movie title and adding to moviecard
      movieTitle.innerText = item.title;
      movieCreated.innerText = item.created_at
      console.log(movieTitle.innerText);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieCreated);
      
     
      container.appendChild(movieCard)


    }
  });
