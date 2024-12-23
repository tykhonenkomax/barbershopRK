import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimateItem, AOSanimation } from '../../components';
import { showSidebar } from '../../reducers/sidebarReducer';
// import { barbers } from '../../actions/user';
import { images } from '../../constants';
import { API_URL } from '../../config';
import './barbers.scss';

import avatar1 from '../../assets/barber_image/avatar_vasil.jpg';
import avatar2 from '../../assets/barber_image/avatar_alyona.jpg';
import avatar3 from '../../assets/barber_image/avatar_max.jpg';
import avatar4 from '../../assets/barber_image/avatar_sasha.jpg';
import avatar5 from '../../assets/barber_image/avatar_oksana.jpg';
import avatar6 from '../../assets/barber_image/avatar_roma.jpg';


const barbersData = [
    { id: 1, name: "Василь", avatar: avatar1 },
    { id: 2, name: "Олена", avatar: avatar2 },
    { id: 3, name: "Макс", avatar: avatar3 },
    { id: 4, name: "Саша", avatar: avatar4 },
    { id: 5, name: "Оксана", avatar: avatar5 },
    { id: 6, name: "Рома", avatar: avatar6 },
];

const Barbers = () => {
    const dispatch = useDispatch();
    const [barbersList, setBarbersList] = useState(barbersData);
    const bookingLink = "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s";

    // useEffect(() => {
    //     dispatch(barbers()).then(result => setBarbersList(result))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <section className='barbers' id='barbers'>
            <AnimateItem url={images.razor} side={"left"}/>
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="barbers__title">- Наші барбери -</h2>
            </AOSanimation>
            <AOSanimation animation="fade-up" duration="1500">
                <p className="barbers__descr">
                    Працюємо важко, залишаємося скромними та надаємо всім <br/>найкращі послуги, які можемо.
                </p>
            </AOSanimation>

            <div className="barbers__wrapper container">
                <div className="barbers__avatars-list">
                    {
                        barbersList && barbersList.map(barber => (
                            <div className="barbers__avatar" key={barber.id}>
                                <div className="barbers__front">
                                    <img className="barbers__img" src={barber.avatar} alt={barber.name}/>
                                    <div className="inner">
                                        <p className='barbers__name'>{barber.name}</p>
                                    </div>
                                </div>
                                <div className="barbers__back">
                                    <img className="barbers__img" src={barber.avatar} alt={barber.name}/>
                                    <div className="inner">
                                        <span className='barbers__btn' onClick={() => {
                                            // Викликаємо дію для сайдбара
                                            dispatch(showSidebar('booking'));

                                            // Перенаправляємо на лінк
                                            window.location.href = "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s";
                                        }}>Забронювати зараз</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Barbers;
