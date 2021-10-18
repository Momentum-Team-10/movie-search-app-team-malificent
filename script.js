const form = document.getElementById("movie-form")
console.log(form)
const newMovie = document.getElementById("new-movie")
console.log(newMovie)
const container = document.getElementById("movie-container")
console.log(container)
const url = "http://localhost:3000/movies"


fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (let item of data) {
        let movieCard = document.createElement("div")
        let movieTitle = document.createElement("div")
        movieTitle.innerText = item.title
        console.log(movieTitle.innerText)
        movieCard.appendChild()
        }
    })