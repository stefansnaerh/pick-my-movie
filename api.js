import {config} from "./config.js"


const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const API_RANDOM_OVER_7 = config.api_over_7
const IMAGE_URL = config.image_base_url


// getting a random page number since it always starts at page 1
let PAGE_NUMBER = Math.floor(Math.random() * 500)
console.log(PAGE_NUMBER)



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

    // If the overview text is longer then 120 letters, add a read more button
    if (movieOverview.length > 120 ) {
        overviewP.innerHTML =  `${movieOverview.slice(0, 120)}`

        const readMore = document.getElementById("read-more")
        readMore.innerHTML = "...read all"

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



   
}






document.getElementById("random-movie-button").addEventListener("click", getMovie)












// api call fyrir allar US myndir me?? yfir 7 ?? einkunn //

//https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&page=1&vote_average.gte=7&with_watch_monetization_types=flatrate//

// api call fyrir myndir yfir 7 ?? einkun eftir 1980
// https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&page=1&release_date.gte=1980&vote_average.gte=7&with_watch_monetization_types=flatrate //

// ??yrfti a?? gera math random fyrir page=1 l??ka //