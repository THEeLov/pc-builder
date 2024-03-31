// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css"

import Navbar from "../components/Homepage/Navbar/Navbar"
import Main from "../components/Homepage/Main/Main"
import ProductCarousel from "../components/Homepage/ProductCarousel/ProductCarousel"
import Footer from "../components/Homepage/Footer/Footer"

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <ProductCarousel />
      <Footer />
    </div>
  )
}

export default App
