import { Link, Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.component";

import "./navigation.styles.css";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Your Home
          </Link>
          <Link className="nav-link" to="/own-planet">
            Find a planet
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
