import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h2>PC Builder</h2>
                <hr className="footer__hr" />
                <a className="footer__link" href="">
                    Builder
                </a>
            </div>
            <div className="footer-account">
                <h2>Account</h2>
                <hr className="footer__hr" />
                <a className="footer__link" href="">
                    Login
                </a>
                <a className="footer__link" href="">
                    Register
                </a>
            </div>
        </div>
    )
}

export default Footer
