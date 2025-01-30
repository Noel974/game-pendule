import { Route, Routes } from "react-router-dom";
import Game from "../Pages/Game";
import Home from "../Pages/Home";

const Routex = () => {
    return (
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path="/Game" element={<Game />} />
        </Routes>
    )
}
export default Routex;