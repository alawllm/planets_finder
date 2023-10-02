import { Link } from "react-router-dom";

import "./footer.styles.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p className="footer-text">Developed in 2023 by Ala Willam</p>
        <Link className="nav-link" to="/about">
          About me
        </Link>
      </div>
    </>
  );
};

export default Footer;
