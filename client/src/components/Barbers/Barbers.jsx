// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { AnimateItem, AOSanimation } from '../../components';
import { images } from '../../constants';
import './barbers.scss';

import avatar1 from '../../assets/barber_image/avatar_vasil.jpg';
import avatar2 from '../../assets/barber_image/avatar_alyona.jpg';
import avatar3 from '../../assets/barber_image/avatar_max.jpg';
import avatar4 from '../../assets/barber_image/avatar_sasha.jpg';
import avatar5 from '../../assets/barber_image/avatar_oksana.jpg';
import avatar6 from '../../assets/barber_image/avatar_roma.jpg';

const barbersData = [
    { id: 1, name: "Василь", avatar: avatar1, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s?p=8f4c87bd-cdd5-11ef-bed4-1da6fcd87574" },
    { id: 2, name: "Олена", avatar: avatar2, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s" },
    { id: 3, name: "Макс", avatar: avatar3, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s" },
    { id: 4, name: "Саша", avatar: avatar4, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s?p=c88238bf-cdd5-11ef-ac61-3914bfdc7964" },
    { id: 5, name: "Оксана", avatar: avatar5, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s?p=f4c8583d-b780-11ec-95e3-e7f0639bde2f" },
    { id: 6, name: "Рома", avatar: avatar6, bookingLink: "https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s?p=b4aa9209-cdd5-11ef-ac61-3914bfdc7964" },
];


const Barbers = () => {
    // const dispatch = useDispatch();
    // const [barbersList, setBarbersList] = useState(barbersData);

    // useEffect(() => {
    //     dispatch(barbers()).then(result => setBarbersList(result))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <section className='barbers' id='barbers'>
            <AnimateItem url={images.razor} side={"left"}/>
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="barbers__title">- Наша Команда -</h2>
            </AOSanimation>
            <AOSanimation animation="fade-up" duration="1500">
                <p className="barbers__descr">
                    Ми не працюємо по шаблону і не маємо корпоративного стилю. Кожен з нас — особистість, <br/>тому знайти свого майстра — це теж частина шляху.
                </p>
            </AOSanimation>

            <div className="barbers__wrapper container">
                <div className="barbers__avatars-list">
                    {
                        barbersData.map(barber => (
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
                                            window.location.href = barber.bookingLink;
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
