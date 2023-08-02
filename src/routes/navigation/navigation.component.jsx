import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer/footer.component";

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>

            <div className='navigation'>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/own-planet'>Find your own planet</Link>
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navigation;