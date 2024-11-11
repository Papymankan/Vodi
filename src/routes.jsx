import EpisodeDetail from "./Pages/EpisodeDetail/EpisodeDetail.jsx"
import GenreMovies from "./Pages/GenreMovies/GenreMovies.jsx"
import GenreSeries from "./Pages/GenreSeries/GenreSeries.jsx"
import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"
import SerieDetail from "./Pages/SerieDetail/SerieDetail.jsx"
import TrendingMovies from "./Pages/TrendingMovies/TrendingMovies.jsx"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movie/:id', element: <MovieDetail /> },
    { path: '/serie/:id', element: <SerieDetail /> },
    { path: '/serie/:id/:season/:episode', element: <EpisodeDetail /> },
    { path: '/movies/genre/:genreId', element: <GenreMovies /> },
    { path: '/series/genre/:genreId', element: <GenreSeries /> },
    { path: '/movies/trending/:time', element: <TrendingMovies /> },
]

export default routes