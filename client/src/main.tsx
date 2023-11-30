import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./screens/Home.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="/" index={true} element={<Home/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
