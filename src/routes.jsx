import EpisodeDetail from "./Pages/EpisodeDetail/EpisodeDetail.jsx"
import GenreMovies from "./Pages/GenreMovies/GenreMovies.jsx"
import GenreSeries from "./Pages/GenreSeries/GenreSeries.jsx"
import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"
import PopularMovies from "./Pages/PopularMovies/PopularMovies.jsx"
import SerieDetail from "./Pages/SerieDetail/SerieDetail.jsx"
import TopYearMovies from "./Pages/TopYearMovies/TopYearMovies.jsx"
import TopYearSeries from "./Pages/TopYearSeries/TopYearSeries.jsx"
import TrendingMovies from "./Pages/TrendingMovies/TrendingMovies.jsx"
import TrendingSeries from "./Pages/TrendingSeries/TrendingSeries.jsx"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movie/:id', element: <MovieDetail /> },
    { path: '/serie/:id', element: <SerieDetail /> },
    { path: '/serie/:id/:season/:episode', element: <EpisodeDetail /> },
    { path: '/movies/genre/:genreId', element: <GenreMovies /> },
    { path: '/series/genre/:genreId', element: <GenreSeries /> },
    { path: '/movies/trending/:time', element: <TrendingMovies /> },
    { path: '/series/trending/:time', element: <TrendingSeries /> },
    { path: '/movies/top-year', element: <TopYearMovies /> },
    { path: '/series/top-year', element: <TopYearSeries /> },
    { path: '/movies/popular', element: <PopularMovies /> },
]

export default routes