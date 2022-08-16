
import {config} from "./config.js"

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const IMAGE_URL = config.image_base_url
const TOP_MOVIES = config.api_top_rated_movies




async function getTopRatedMovies() {

    // Getting the top rated movies
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}${TOP_MOVIES}`);
    let responseData = await response.json()
    console.log(responseData)

    // storing the results in an array
    const movies = responseData.results
    // only using the first four movies using slice method
    const movie = movies
    const movieContainer = document.getElementById("movie-container")

    console.log(movie)

    // Using the forEach method to build the html for each element in movie array
    movie.forEach((movie) => {
 
    const poster = movie.poster_path
    const movieTitle = movie.title
    const yearOfRelease = movie.release_date.slice(-10, -6)
    const rating = movie.vote_average
    

    const topMovieWrapper = document.createElement("div")
    topMovieWrapper.classList.add("movies-container")
    movieContainer.appendChild(topMovieWrapper)

    const topMoviePoster = document.createElement("img")
    topMoviePoster.classList.add("top-movies-poster")
    topMoviePoster.alt, topMoviePoster.ariaLabel = "movie-poster"
    topMovieWrapper.appendChild(topMoviePoster)
    topMoviePoster.src = `${IMAGE_URL}${poster}`

    const starWrapper = document.createElement("span")
    starWrapper.classList.add("top-movies-star-wrapper")
    topMovieWrapper.appendChild(starWrapper)

    const star = document.createElement("img")
    star.classList.add("top-movies-star")
    star.src = `../images/Star.png`
    starWrapper.appendChild(star)

    const voteAverage = document.createElement("p")
    voteAverage.classList.add("top-movies-rating")
    starWrapper.appendChild(voteAverage)
    voteAverage.innerHTML = `${rating}`

    const topMovieTitle = document.createElement("h2")
    topMovieTitle.classList.add("top-movies-title")
    topMovieWrapper.appendChild(topMovieTitle)
    topMovieTitle.innerHTML = `${movieTitle}`

    const topMovieRelease = document.createElement("h3")
    topMovieRelease.classList.add("top-movies-release")
    topMovieWrapper.appendChild(topMovieRelease)
    topMovieRelease.innerHTML= `${yearOfRelease}`

})

const viewAllButton = document.createElement("button")
movieContainer.appendChild(viewAllButton)
viewAllButton.classList.add("view-all-button")
viewAllButton.innerHTML = "Load more"


}

getTopRatedMovies()
