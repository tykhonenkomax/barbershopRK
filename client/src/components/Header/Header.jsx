import React from 'react';
import { Navbar } from '../../components';
import { FaUserTie } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from '../../reducers/sidebarReducer';
import { images } from '../../constants';
import './header.scss';

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <div className="header">
            <a href="/">
                <img className='header__logo' src={images.Logo} alt="logo" />
            </a>
            <Navbar />
            {isAuth && <h3 className='header__welcome'>שלום <span>{user.name}</span></h3>}
            <div className="header__user-icon" onClick={() => { !isAuth ? dispatch(showSidebar('login')) : dispatch(showSidebar('myAccount')) }}>
                {
                    user.isBarber ? (<img className="header__avatar" src={images.avatar} alt={user.name + 'avatar'} />
                    ) : (
                        <FaUserTie />)
                }
            </div>
        </div>
    )
}
export default Header;