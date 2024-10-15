import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"
import SerieDetail from "./Pages/SerieDetail/SerieDetail.jsx"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movie/:id', element: <MovieDetail /> },
    { path: '/serie/:id', element: <SerieDetail /> },
]

export default routes