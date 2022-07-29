

export const config = {
    api_key: "6af2e686b425c8e3274b4275976091e1",
    api_base_url: "https://api.themoviedb.org/3/",
    api_over_7 :"release_date.gte=1980&vote_average.gte=7&with_watch_monetization_types=flatrate",
    image_base_url: "https://image.tmdb.org/t/p/w500/"
}

/*async function getMovie() {
    // Getting a random number from 1-20 to get random movie from the API array
    let randomMovie = Math.floor(Math.random() * 20)
    let response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}&${API_RANDOM_OVER_7}`);
    let responseData = await response.json()
    console.log(responseData)

    // Manipulating the HTML - removing elements when the function is activated
    const h1 = document.getElementById("quality-text")
    const h2 = document.getElementById("quality-sub-text")
    h1.remove()
    h2.remove()
    // Manipulating the HTML - adding elements when the function is activated 
    const movie = responseData.results[randomMovie]
    let movieTitle = movie.title
    document.getElementById("movie-title").innerHTML = movieTitle

   
}

*/
