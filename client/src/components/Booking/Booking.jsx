import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../Spinner/Spinner';
import { BarberList, Services, Calendar } from './index';
import { newAppointment } from '../../actions/appointment'
import { TbCalendarStats, TbListCheck } from "react-icons/tb";
import { IoIosPeople, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { format } from "date-fns";
import { API_URL } from "../../config";
import './booking.scss'
import { images } from '../../constants';

const Booking = () => {
    const dispatch = useDispatch()
    const appointment = useSelector(state => state.appointment);
    const user = useSelector(state => state.user.currentUser);
    const [title, setTitle] = useState("Вибір дати");
    const [isActiveCategory, setIsActiveCategory] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setMessage('');
    },[])

    const handleBack = () => {
        setIsActiveCategory('');
        setIsOpen(false)
        setTitle("Вибір дати");
    }

    const handleClick = (item) => {
        setIsActiveCategory(item.id);
        setTitle(item.title);
        if(item.id === "barberList") {
            setIsDisabled(false)
        }
    }

    const handleSubmit = () => {
        dispatch(newAppointment(appointment, user)).then(result => setMessage(result))
        setIsDisabled(true)
    }

    const currentCategory = () => {
        switch (isActiveCategory) {
            case "barberList":
                return <BarberList
                    barberID={appointment.barber._id}
                    setIsActiveCategory={setIsActiveCategory}
                    setTitle={setTitle} />;
                // eslint-disable-next-line
                break;
            case "services":
                return <Services
                    service={appointment.service}
                    setIsActiveCategory={setIsActiveCategory}
                    setTitle={setTitle} />;
                // eslint-disable-next-line
                break;
            case "calendar":
                return <Calendar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setIsActiveCategory={setIsActiveCategory}
                    time={appointment.time}
                    setTitle={setTitle}
                    barber={appointment.barber} />;
                // eslint-disable-next-line
                break;

            default:
                return '';
        }
    }

    return (
        <Sidebar title={title} setIsDisabled = {setIsDisabled} setMessage = {setMessage}>
            <div className="booking">
                {isActiveCategory && <div className="booking__back" onClick={handleBack}>Назад<IoIosArrowBack /></div>}

                <ul className={isActiveCategory === '' ? "booking__list active" : "booking__list"}>
                    {category.map((item) =>
                        <li key={item.id} className={`booking__item ${item.id !== "barberList" && isDisabled && "disabled"}`} id={item.id} onClick={() => handleClick(item)}>
                            {item.icon} {item.title}
                            {appointment.barber._id && item.id === "barberList" && <img className='booking__item-avatar appointment' src={appointment.barber.avatar ? API_URL + appointment.barber.avatar : images.avatar} alt="appointment barber img"></img>}
                            {appointment.time && item.id === "calendar" && <span dir="ltr">{format(new Date(appointment.time), "d / M / yy -  H:mm")}</span>}
                            {appointment.service && item.id === "services" && <span dir="ltr">{appointment.service}</span>}
                        </li>
                    )}
                </ul>

                {category.map(item => (
                    isActiveCategory === item.id &&
                    currentCategory()
                ))}

                <Spinner />

                {
                    appointment.barber &&
                    appointment.time &&
                    appointment.service &&
                    message &&
                    <span className='booking__message'>{message}</span>
                }

                {
                    appointment.barber &&
                    appointment.time &&
                    appointment.service &&
                    !message &&
                    <button className='booking__btn btn active' onClick={handleSubmit}>Забронювати</button>
                }
            </div>
        </Sidebar>
    )
}

export default Booking

const category = [
    {
        id: 'barberList',
        icon: <IoIosPeople />,
        title: "Вибір барбера"
    },
    {
        id: 'calendar',
        icon: <TbCalendarStats />,
        title: "Вибір дати"
    },
    {
        id: 'services',
        icon: <TbListCheck />,
        title: "Вибір послуги"
    }
]
