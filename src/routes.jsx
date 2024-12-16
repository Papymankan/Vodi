import AirTodaySeries from "./Pages/AirTodaySeries/AirTodaySeries.jsx"
import EpisodeDetail from "./Pages/EpisodeDetail/EpisodeDetail.jsx"
import GenreMovies from "./Pages/GenreMovies/GenreMovies.jsx"
import GenreSeries from "./Pages/GenreSeries/GenreSeries.jsx"
import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"
import OnAirSeries from "./Pages/OnAirSeries/OnAirSeries.jsx"
import PopularMovies from "./Pages/PopularMovies/PopularMovies.jsx"
import PopularSeries from "./Pages/PopularSeries/PopularSeries.jsx"
import SerieDetail from "./Pages/SerieDetail/SerieDetail.jsx"
import TheatreMovies from "./Pages/TheatreMovies/TheatreMovies.jsx"
import TopRatedMovies from "./Pages/TopRatedMovies/TopRatedMovies.jsx"
import TopRatedSeries from "./Pages/TopRatedSeries/TopRatedSeries.jsx"
import TopYearMovies from "./Pages/TopYearMovies/TopYearMovies.jsx"
import TopYearSeries from "./Pages/TopYearSeries/TopYearSeries.jsx"
import TrendingMovies from "./Pages/TrendingMovies/TrendingMovies.jsx"
import TrendingSeries from "./Pages/TrendingSeries/TrendingSeries.jsx"
import UpcomingMovies from "./Pages/UpcomingMovies/UpcomingMovies.jsx"
import Profile from "./Pages/Profile/Profile.jsx"
import WatchListMovies from "./Pages/WatchListMovies/WatchListMovies.jsx"
import WatchListSeries from "./Pages/WatchListSeries/WatchListSeries.jsx"
import FavoriteMovies from "./Pages/FavoriteMovies/FavoriteMovies.jsx"
import FavoriteSeries from "./Pages/FavoriteSeries/FavoriteSeries.jsx"


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
    { path: '/series/popular', element: <PopularSeries /> },

    { path: '/movies/top-rated', element: <TopRatedMovies /> },
    { path: '/series/top-rated', element: <TopRatedSeries /> },

    { path: '/movies/in-theatre', element: <TheatreMovies /> },
    { path: '/movies/upcoming', element: <UpcomingMovies /> },

    { path: '/series/airing-today', element: <AirTodaySeries /> },
    { path: '/series/on-air', element: <OnAirSeries /> },

    { path: '/profile', element: <Profile /> },

    { path: '/watchlist/movie', element: <WatchListMovies /> },
    { path: '/watchlist/serie', element: <WatchListSeries /> },
 
    { path: '/favorite/movie', element: <FavoriteMovies /> },
    { path: '/favorite/serie', element: <FavoriteSeries /> },
]

export default routes