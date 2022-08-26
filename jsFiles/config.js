

export const config = {
    api_key: "6af2e686b425c8e3274b4275976091e1",
    api_base_url: "https://api.themoviedb.org/3/",
    api_over_7 :"release_date.gte=1980&vote_average.gte=7&with_watch_monetization_types=flatrate",
    image_base_url: "https://image.tmdb.org/t/p/w500/",
    trailer_base_url: "https://www.youtube.com/watch?v=",

    api_top_rated_movies: "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate",
    api_top_rated_popularity: "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate"

}





// api call fyrir top rated movies after 2000 https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2000-01-01&vote_count.gte=500&with_watch_monetization_types=flatrate


// api call fyrir top rated movies 1980 - 1999 https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1980-01-01&primary_release_date.lte=2000-01-01&vote_count.gte=500&with_watch_monetization_types=flatrate


// api call fyrir top rated movies fyrir 1980  https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=1980-01-01&vote_count.gte=500&with_watch_monetization_types=flatrate


// api call fyrir myndir fyrir 1999 https://api.themoviedb.org/3/discover/movie?api_key=6af2e686b425c8e3274b4275976091e1&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=1999-01-01&vote_count.gte=500&with_watch_monetization_types=flatrate


// api call fyrir top 250 þætti imdb https://imdb-api.com/en/API/Top250TVs/k_tiy8x405