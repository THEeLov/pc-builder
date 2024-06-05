import "./navbar.css"
import SignIn from "../../images/sign_in.svg"
import CustomButton from "../CustomButton/CustomButton"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__site-name">
                <Link to="/" className="nav__site-name__link">
                    <h1>PC Builder</h1>
                </Link>
            </div>
            <div className="nav__login">
                <div className="nav__icons">
                    <Link to="/login" className="icon-container">
                        <img src={SignIn} alt="sign in" />
                    </Link>
                </div>

                <div className="nav-desktop">
                    <Link to="/login">
                        <CustomButton label="Sign in" btype="primary" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
