import EpisodeDetail from "./Pages/EpisodeDetail/EpisodeDetail.jsx"
import GenreMovies from "./Pages/GenreMovies/GenreMovies.jsx"
import GenreSeries from "./Pages/GenreSeries/GenreSeries.jsx"
import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"
import SerieDetail from "./Pages/SerieDetail/SerieDetail.jsx"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movie/:id', element: <MovieDetail /> },
    { path: '/serie/:id', element: <SerieDetail /> },
    { path: '/serie/:id/:season/:episode', element: <EpisodeDetail /> },
    { path: '/movie/genre/:genreId', element: <GenreMovies /> },
    { path: '/serie/genre/:genreId', element: <GenreSeries /> },
]

export default routes