import "./navbar.css"
import SignIn from "../../../images/sign_in.svg"
import CustomButton from "../../CustomButton"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__site-name">
        <h1>PC Builder</h1>
      </div>
      <div className="nav__login">
        <div className="nav__icons">
          <div className="icon-container">
            <img src={SignIn} alt="sign in" />
          </div>
        </div>

        <div className="nav-desktop">
          <CustomButton label="Sign in" btype="primary" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
