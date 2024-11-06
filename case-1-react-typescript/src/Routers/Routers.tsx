import { createBrowserRouter } from "react-router-dom";
import Soal1 from "../components/Soal/Soal1";
export const router = createBrowserRouter([
    {
        path        : "/",
        element     : <Soal1 />
    }
]);