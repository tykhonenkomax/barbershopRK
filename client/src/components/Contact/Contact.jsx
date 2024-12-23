import React, { useState } from 'react';
import { Divider, AOSanimation } from '../../components';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Map } from '../../components';
import './contact.scss';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(false)
        if(!name || !email || !msg) {
            console.log("pfgsdlghjsdjh");
        }else {
            setIsSubmit(true)
            setName('');
            setEmail('');
            setMsg('');
        }
    }

    return (
        <section className='contact container' id='contact'>
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="contact__title">- Контактна інформація -</h2>
            </AOSanimation>
            <Divider />

            <div className="contact__workHours">
                <ul className="contact__workHours-list">
                    <li className="contact__workHours-item">Пн-Пт: 10:00 - 22:00</li>
                    <li className="contact__workHours-item">Субота: 10:00 - 22:00</li>
                    <li className="contact__workHours-item">Неділя: 10:00-18:00</li>
                </ul>
            </div>

            <div className="contact__info">
                <ul className="contact__info-list">
                    <li className="contact__info-item email"><FiMail /> tikhonenko.m@gmaiil.com</li>
                    <li className="contact__info-item phone"><FiPhone /> 067-67-140-46</li>
                    <li className="contact__info-item address"><FiMapPin /> Львів, вул. Юнаківа, 9в</li>
                </ul>
            </div>

            <div className="contact__wrapper">
                <div className="contact__right">
                    <Map />
                </div>

                <div className="contact__left">
                    <form action='' className="contact__form" onSubmit={handleSubmit}>
                        <input className='contact__form-input' type="text" value={name} name="name" placeholder='Ім’я' required onChange={(e) => setName(e.target.value)} />
                        <input className='contact__form-input' type="text" value={email} name="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                        <textarea className='contact__form-textarea' value={msg} name="message" placeholder="Повідомлення" rows="4" cols="50" onChange={(e) => setMsg(e.target.value)} />
                        <button className="contact__form-btn btn" type="submit">Відправити</button>
                    </form>

                    {isSubmit && name === '' && email === '' && msg === '' && <h3 className='contact__message'>Повідомлення успішно відправлено!</h3>}
                </div>
            </div>
        </section>
    )
}

export default Contact;
