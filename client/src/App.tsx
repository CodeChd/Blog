import Layout from "./components/Layout/Layout.tsx";
import Header from "./components/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <Layout>
                <Outlet/>
            </Layout>
            <Footer/>
        </>
    )
}

export default App
