import {config} from "./config.js"



const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const API_RANDOM_OVER_7 = config.api_over_7
const IMAGE_URL = config.image_base_url
const TV_POPULARITY = config.api_top_tv_popularity
const TV_RATING = config.api_top_tv_rating
const TRAILER = config.trailer_base_url







// getting a random page number since it always starts at page 1
let PAGE_NUMBER = Math.floor(Math.random() * 500)


// Function that gets a random movie with over 7 in ratings when button clicks. 
async function getMovie() {
    // Getting a random number from 1-20 to get random movie from the API array
    let randomMovie = Math.floor(Math.random() * 20)
    // Connecting to the API
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM_OVER_7}`);
    let responseData = await response.json()

    // Manipulating the HTML - adding and removing elements when the function is activated
    document.getElementById("quality-text-container").style.display = "none"
    document.getElementById("random-movie-container").style.display = "initial"
    document.getElementById("movie-card-headline").style.display = "none"
    document.getElementById("random-movie-button").innerHTML = "Next!" 
    document.getElementById("random-movie-button").style.marginTop = "0"   


    // When button is clicked, append the info from the api to the html file
    const movie = responseData.results[randomMovie]
    let movieTitle = movie.title
    document.getElementById("movie-title").innerHTML = movieTitle
    let moviePoster = movie.poster_path
    document.getElementById("movie-poster").src = `${IMAGE_URL}${moviePoster}`
    let movieDate = movie.release_date.slice(-10, -6)
    document.getElementById("release-date").innerHTML = movieDate
    let movieRating = movie.vote_average
    document.getElementById("movie-rating").innerHTML = movieRating
    let movieOverview = movie.overview
    const overviewP = document.getElementById("overview-sub")
    overviewP.innerHTML = movieOverview

    // If the overview text is longer then 120 letters, add a read more button
   // if (movieOverview.length > 120 ) {
        overviewP.innerHTML =  `${movieOverview.slice(0, 120)}`

        const readMore = document.getElementById("read-more")
        readMore.innerHTML = "...read more"

        function readMoreButton() {
            overviewP.innerHTML = movieOverview
            readMore.style.display = "none"

        
            
            // when readmore is clicked, change to read less
            const readLess = document.getElementById("read-less")
            readLess.innerHTML = "read less"

            readLess.addEventListener("click", readLessButton)

            function readLessButton () {
                overviewP.innerHTML =  `${movieOverview.slice(0, 120)}`
                readLess.style.display = "none"
                readMore.style.display = "initial"
            }
        }
        readMore.addEventListener("click", readMoreButton)

    }






document.getElementById("random-movie-button").addEventListener("click", getMovie)




// function that gets top rated movies from the movie database

async function getTopRatedMovies() {

    // Getting the top rated movies
    let response = await fetch(`${BASE_URL}discover/tv?api_key=${API_KEY}${TV_RATING}`);
    let responseData = await response.json()
    const movies = responseData.results



    // storing the results in an array
    // only using the first four movies using slice method
    let movie = movies.slice(0, 4)

    const movieContainer = document.getElementById("movie-container")

    // Using the forEach method to build the html for each element in movie array
    movie.forEach((movie) => {
 
        const poster = movie.poster_path
        const movieTitle = movie.name
        const yearOfRelease = movie.first_air_date.slice(-10, -6)
        const rating = movie.vote_average
        const id = movie.id
    

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

}

getTopRatedMovies()


async function getTopRatedMovies2000() {

    let response = await fetch(`${BASE_URL}discover/tv?api_key=${API_KEY}${TV_POPULARITY}`);
    let responseData = await response.json()
   
    const movies = responseData.results

    let movie = movies.slice(0, 4)

    const movieContainer = document.getElementById("top-movies-2000-container")

    movie.forEach((movie) => {

        const poster = movie.poster_path
        const movieTitle = movie.name
        const yearOfRelease = movie.first_air_date.slice(-10, -6)
        const rating = movie.vote_average
        const id = movie.id

   

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
    
    


}

getTopRatedMovies2000()