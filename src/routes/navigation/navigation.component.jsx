import { Outlet, Link } from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <Link className='logo-container' to='/'>
                <div>Logo</div>
            </Link>

            <div className='link-container'>
                <Link className='nav-link' to='/own-planet'>Find your own planet</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;