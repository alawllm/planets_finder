import './footer.styles.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p>Developed in 2023 by Ala Wlm</p>
                <Link className='nav-link' to='/about'>About me</Link>
            </div>

        </>
    )
}

export default Footer;