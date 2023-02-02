
import {config} from "./config.js"


// storing page in a variable so I can load more pages on click
let page = 1;
const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const IMAGE_URL = config.image_base_url
const TRAILER = config.trailer_base_url





async function getTopRatedMovies(page = 1) {

    // Getting the top rated movies
    // I had to use almost the full url in the api call since the page counter is in the middle of it
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=500&with_watch_monetization_types=flatrate`);
    let responseData = await response.json()


    // storing the results in an array
    const movies = responseData.results
    // only using the first four movies using slice method
    const movie = movies
    const movieContainer = document.getElementById("movie-container")
    const movieContainerAll = document.getElementById("top-movies-container-all")

    console.log(movie)

    // Using the forEach method to build the html for each element in movie array
    movie.forEach((movie) => {
 
    const poster = movie.poster_path
    const movieTitle = movie.title
    const yearOfRelease = movie.release_date.slice(-10, -6)
    const rating = movie.vote_average
    const id = movie.id
    

    const topMovieWrapper = document.createElement("div")
    topMovieWrapper.classList.add("movies-container")
    movieContainer.appendChild(topMovieWrapper)

    const topMoviePoster = document.createElement("img")
    topMoviePoster.classList.add("top-movies-poster")
    topMoviePoster.ariaLabel = `${movieTitle} poster`
    topMoviePoster.alt = `${movieTitle} poster`
    topMovieWrapper.appendChild(topMoviePoster)
    topMoviePoster.src = `${IMAGE_URL}${poster}`

    const starWrapper = document.createElement("span")
    starWrapper.classList.add("top-movies-star-wrapper")
    topMovieWrapper.appendChild(starWrapper)

    const star = document.createElement("img")
    star.classList.add("top-movies-star")
    star.src = `../images/Star.png`
    star.alt = "star"
    starWrapper.appendChild(star)

    const voteAverage = document.createElement("p")
    voteAverage.classList.add("top-movies-rating")
    starWrapper.appendChild(voteAverage)
    voteAverage.innerHTML = `${rating}`
    voteAverage.ariaLabel = "movie rating"

    const topMovieTitle = document.createElement("h2")
    topMovieTitle.classList.add("top-movies-title")
    topMovieWrapper.appendChild(topMovieTitle)
    topMovieTitle.innerHTML = `${movieTitle}`
    topMovieTitle.ariaLabel = "movie title"

    const topMovieRelease = document.createElement("h3")
    topMovieRelease.classList.add("top-movies-release")
    topMovieWrapper.appendChild(topMovieRelease)
    topMovieRelease.innerHTML= `${yearOfRelease}`
    topMovieRelease.ariaLabel = "movie release year"

    async function trailers() { 
        let response= await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
        let responseTrailerData = await response.json()
    
        console.log(responseTrailerData)
    
        const movieTrailer = responseTrailerData.results[0].key
        console.log(movieTrailer)
    
    
        const trailer = document.createElement("a")
        trailer.classList.add("trailerButton")
        topMovieWrapper.appendChild(trailer)
        trailer.innerHTML = "Watch trailer"
        trailer.href = `${TRAILER}${movieTrailer}`
        trailer.ariaLabel = "movie youtube trailer link"
    
        const youtubeIcon = document.createElement("img")
        youtubeIcon.classList.add("youtube-icon")
        trailer.appendChild(youtubeIcon)
        youtubeIcon.src = "./images/youtube12px.svg"
        youtubeIcon.alt = "youtube icon"
    
       }
       trailers()

})

}

getTopRatedMovies()


// function that loads the next page from the API
document.getElementById("load-more-button").addEventListener("click", function(){
    page = page + 1 
    getTopRatedMovies(page)
})

