import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import { showSidebar } from '../../reducers/sidebarReducer';
import Spinner from '../Spinner/Spinner';
import './authorization.scss'

const LogIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isView, setIsView] = useState(false)
    const [isAutoFill, setIsAutoFill] = useState(false)
    const error = useSelector(state => state.user.error);

    const handleClick = (email) => {
        setEmail(email);
        setPassword("123");
        setIsAutoFill(false);
    }

    return (
        <Sidebar title="Вхід">
            <div className="authorization">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Електронна адреса" />
                <div className="authorization__input-password">
                    {!isView ? <AiOutlineEye onClick={() => setIsView(!isView)} /> : <AiOutlineEyeInvisible onClick={() => setIsView(!isView)} />}
                    <input value={password} id="password" onChange={(e) => setPassword(e.target.value)} type={`${isView ? "text" : "password"}`} placeholder="Пароль" />
                </div>
                {error && <div className="authorization__message error">{error}</div>}
                <Spinner />
                <div className="authorization__btns">
                    <button className="authorization__btn btn" onClick={() => dispatch(login(email, password))}>Увійти</button>
                    <button className="authorization__btn btn" onClick={() => dispatch(showSidebar('registration'))}>Реєстрація</button>
                </div>

                {!isAutoFill && <p className='authorization__autoFill-text' onClick={() => setIsAutoFill(!isAutoFill)}>Натисніть тут, щоб автоматично заповнити дані для перевірки.</p>}

                {isAutoFill && <div className="authorization__autoFill">
                    <button className="authorization__btn btn" onClick={() => handleClick("user@gmail.com")}>user</button>
                    <button className="authorization__btn btn" onClick={() => handleClick("barber1@gmail.com")}>barber: 1</button>
                    <button className="authorization__btn btn" onClick={() => handleClick("barber2@gmail.com")}>barber: 2</button>
                    <button className="authorization__btn btn" onClick={() => handleClick("barber3@gmail.com")}>barber: 3</button>
                </div>}

            </div>
        </Sidebar>
    )
}

export default LogIn;
