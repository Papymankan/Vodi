export const BaseUrl = 'https://api.themoviedb.org/3/'

let key = import.meta.env.VITE_TMDB_API_KEY
export const ApiKey= 'api_key=' + key

console.log(ApiKey);


export const ImageBaseUrl= 'https://image.tmdb.org/t/p/original'
export const ImageLowQualityUrl= "https://image.tmdb.org/t/p/w300"