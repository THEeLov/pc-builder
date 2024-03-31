import "./navbar.css"
import SignIn from "../../../images/sign_in.svg"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__site-name">
        <h1>PC Builder</h1>
      </div>
      <div className="nav__icons">
        <div className="icon-container">
          <img src={SignIn} alt="sign in" />
        </div>
      </div>

      {/* TODO BUTTONS TO SIGN IN AND REGISTER DESKTOP */}
    </nav>
  )
}

export default Navbar
