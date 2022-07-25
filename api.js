import {config} from "./config.js"


const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const API_RANDOM_OVER_7 = config.api_over_7


// getting a random page number since it always starts at page 1
let PAGE_NUMBER = Math.floor(Math.random() * 500)
console.log(PAGE_NUMBER)


// function that gets all movies after 1980 with over 7 ratings
// next need to map over the array and pick one movie
/*
async function getMovie() {
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM}`);
    let data = await response.json()
    return data;
}
getMovie().then(data => console.log(data));


*/

/*
async function getMovie() {

    let randomMovie = Math.floor(Math.random() * 20)

    let data = []
    try {
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM_OVER_7}`);
    let responseData = await response.json()
    data = responseData?.results[randomMovie]

    } catch (error) {

    }
    return data;
}
getMovie().then(data => console.log(data));

*/
async function getMovie() {

    let randomMovie = Math.floor(Math.random() * 20)
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM_OVER_7}`);
    let responseData = await response.json()
    console.log(responseData)

    const movie = responseData.results[randomMovie]
    let movieTitle = movie.title
    document.getElementById("movie-title").innerHTML = movieTitle

   
}
getMovie()






document.getElementById("random-movie-button").addEventListener("click", getMovie)












// api call fyrir allar US myndir með yfir 7 í einkunn //

//https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&page=1&vote_average.gte=7&with_watch_monetization_types=flatrate//

// api call fyrir myndir yfir 7 í einkun eftir 1980
// https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&page=1&release_date.gte=1980&vote_average.gte=7&with_watch_monetization_types=flatrate //

// þyrfti að gera math random fyrir page=1 líka //