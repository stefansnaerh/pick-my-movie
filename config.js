

export const config = {
    api_key: "6af2e686b425c8e3274b4275976091e1",
    api_base_url: "https://api.themoviedb.org/3/",
    api_over_7 :"release_date.gte=1980&vote_average.gte=7&with_watch_monetization_types=flatrate",
    image_base_url: "https://image.tmdb.org/t/p/w500/",

    api_top_rated_movies: "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate"
}
