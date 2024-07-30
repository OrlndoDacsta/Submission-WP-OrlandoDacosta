import Home from "../pages/Home";
import Lapangan from "../pages/lapangan";


const routeList =[
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/lapangan/:id",
        element: <Lapangan/>
    }
]

export default routeList