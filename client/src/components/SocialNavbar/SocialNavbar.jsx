import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import './socialNavbar.scss';

const SocialNavbar = () => {
    return (
        <div className="social">
            <ul className='social__list'>
                <li className='social__item'>
                    <a className='social__link' href=" "><FaFacebookF /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href=" "><FaInstagram /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href=" "><FaTwitter /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href=" "><FaYoutube /></a>
                </li>
                <li className='social__item'>
                    <a className='social__link' href=" "><FaLinkedin /></a>
                </li>
            </ul>
        </div>
    )
}
export default SocialNavbar;
