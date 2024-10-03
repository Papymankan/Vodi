import Home from "./Pages/Home/Home.jsx"
import MovieDetail from "./Pages/MovieDetail/MovieDetail.jsx"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movie/:id', element: <MovieDetail /> },
]

export default routes