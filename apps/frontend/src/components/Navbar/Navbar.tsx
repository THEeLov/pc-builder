import "./navbar.css"
import SignIn from "../../images/sign_in.svg"
import CustomButton from "../CustomButton/CustomButton"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__site-name">
        <h1>PC Builder</h1>
      </div>
      <div className="nav__login">
        <div className="nav__icons">
          <a href="/login" className="icon-container">
            <img src={SignIn} alt="sign in" />
          </a>
        </div>

        <div className="nav-desktop">
          <a href="/login">
            <CustomButton label="Sign in" btype="primary" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
