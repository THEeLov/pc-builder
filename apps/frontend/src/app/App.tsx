// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./app.css"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App
