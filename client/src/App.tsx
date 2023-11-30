import Layout from "./components/Layout/Layout.tsx";
import Header from "./components/Header/Header.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default App
