import {config} from "./config.js"


const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const API_RANDOM_OVER_7 = config.api_over_7
const IMAGE_URL = config.image_base_url
const TOP_MOVIES = config.api_top_rated_movies
const TOP_MOVIES_2000 = config.api_top_rated_popularity
const TRAILER = config.trailer_base_url




// getting a random page number since it always starts at page 1
let PAGE_NUMBER = Math.floor(Math.random() * 500)
console.log(PAGE_NUMBER)



// Function that gets a random movie with over 7 in ratings when button clicks. 
async function getMovie() {
    // Getting a random number from 1-20 to get random movie from the API array
    let randomMovie = Math.floor(Math.random() * 20)
    // Connecting to the API
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM_OVER_7}`);
    let responseData = await response.json()
    console.log(responseData)

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
    const movieId = movie.id

    async function trailers() { 
        let response= await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
        let responseTrailerData = await response.json()
        
        const movieTrailer = responseTrailerData.results[0].key

        document.getElementById("random-movie-trailer").href = `${TRAILER}${movieTrailer}`
    }
    trailers()    

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
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}${TOP_MOVIES}`);
    let responseData = await response.json()
    console.log(responseData)

    // storing the results in an array
    const movies = responseData.results
    // only using the first four movies using slice method

   let movie = movies.slice(0, 4)

    const movieContainer = document.getElementById("movie-container")

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

// function to get trailers. Need to make a new API call with the ID of each movie to get trailer information
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

    const youtubeIcon = document.createElement("img")
    youtubeIcon.classList.add("youtube-icon")
    trailer.appendChild(youtubeIcon)
    youtubeIcon.src = "../images/youtube12px.svg"

   }
   trailers()

/*
    movieTrailers.forEach ((movieTrailers) => {

        const trailer = document.createElement("a")
        topMovieWrapper.appendChild(trailer)
    })

   
*/
    



})

}

getTopRatedMovies()


async function getTopRatedMovies2000() {

    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}${TOP_MOVIES_2000}`);
    let responseData = await response.json()
    console.log(responseData)

    const movies = responseData.results
    const movie = movies.slice(0, 4)

    const movieContainer = document.getElementById("top-movies-2000-container")

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
        
            const youtubeIcon = document.createElement("img")
            youtubeIcon.classList.add("youtube-icon")
            trailer.appendChild(youtubeIcon)
            youtubeIcon.src = "../images/youtube12px.svg"
        
           }
           trailers()

    })
    
    


}

getTopRatedMovies2000()

