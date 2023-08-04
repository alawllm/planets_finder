import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/own-planet'>Find your own planet</Link>
                    <Link className='nav-link' to='/about'>About me</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;