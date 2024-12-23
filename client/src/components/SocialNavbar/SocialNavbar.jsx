import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGoogle} from "react-icons/fa";
import './socialNavbar.scss';

const SocialNavbar = () => {
    return (
        <div className="social">
            <ul className='social__list'>
                <li className='social__item'>
                    <a className='social__link' href="https://maps.app.goo.gl/N5ms9yneWTvqzwQB6"><FaGoogle /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href="https://www.instagram.com/rock_n_roll_hair/"><FaInstagram /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href="https://www.linkedin.com/in/max-tykhonenko-9055b6136/"><FaLinkedin /></a>
                </li>
            </ul>
        </div>
    )
}
export default SocialNavbar;
