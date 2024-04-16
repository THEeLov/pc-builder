// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./app.css"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default App
