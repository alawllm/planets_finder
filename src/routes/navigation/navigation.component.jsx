import { Outlet, Link } from "react-router-dom";

import './navigation.styles.css'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    Home Logo
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/own-planet'>Find your own planet</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;