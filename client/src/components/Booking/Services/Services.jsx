import { setService } from '../../../reducers/appointmentReducer';
import { useDispatch } from 'react-redux';
import { images } from '../../../constants';
import './services.scss'

const Services = ({ service, setIsActiveCategory, setTitle }) => {
    const dispatch = useDispatch()

    const handleService = (title) => {
        dispatch(setService(title));
        setIsActiveCategory('');
        setTitle("Запис на прийом");
    }

    return (
        <ul className="booking__list active" >

            {services.map((item) =>
                <li key={item.id}
                    className={`service ${service === item.title && "active"}`}
                    id={item.id}>
                    <img className='service__img' src={item.img} alt={item.title} />
                    <div className="service__wrapper">
                        <h2 className="service__title">{item.title}</h2>
                        <h3 className='service__descr'>{item.descr}</h3>
                        <button className='service__btn' type='button' onClick={() => handleService(item.title)}>
                            +
                        </button>
                        <span className='service__price'>{item.price}&#8362;</span>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Services

const services = [
    {
        id: 1,
        img: images.men_haircut,
        title: "Чоловіча стрижка",
        descr: "Стрижка будь-якої складності. Робота виконується як машинкою, так і ножицями. Чоловіча стрижка включає шампунь (до та після стрижки). Також включено обрізання контурів лінії волосся бритвою. Після стрижки виконується укладка (не обов'язково)",
        price: 100
    },
    {
        id: 2,
        img: images.haircut_machine,
        title: "Стрижка машинкою",
        descr: "Цей сервіс включає шампунь (до та після стрижки), стрижку тільки машинкою, а також обрізання волосся на скронях і потилиці (не обов'язково)",
        price: 80
    },
    {
        id: 3,
        img: images.head_shaving,
        title: "Гоління голови",
        descr: "Цей сервіс включає тільки гоління голови (без бороди). Обов'язкове попереднє розпарювання шкіри обличчя у кілька етапів і охолодження шкіри після процедури. В кінці наноситься крем або післягоління.",
        price: 130
    },
    {
        id: 4,
        img: images.drawing,
        title: "Малюнок на голові",
        descr: "Сьогодні різноманітні візерунки та малюнки, виголені на голові, стали досить популярними. Чоловічі стрижки з малюнками можна зробити на всій голові, але більшість чоловіків віддають перевагу обмежити їх малюнком на скронях або потилиці.",
        price: 70
    },
    {
        id: 5,
        img: images.beard,
        title: "Коригування бороди",
        descr: "Цей сервіс включає формування (машинкою або ножицями) і точне обрізання бритвою. Робота з усією бородою, включаючи вуса. Якщо бажаєте, можна зробити модель бороди за допомогою електричної бритви. Наприкінці наноситься масло або крем для живлення і зволоження бороди.",
        price: 90
    },
    {
        id: 6,
        img: images.beard_painting,
        title: "Офарблення бороди",
        descr: "Це спеціалізований салонний сервіс, який дозволяє за кілька хвилин відновити природний і рівний колір волосся за допомогою спеціального барвника.",
        price: 110
    },
    {
        id: 7,
        img: images.hair_camouflage,
        title: "Камуфляж сивого волосся: голова",
        descr: "Це спеціалізований салонний сервіс для чоловіків, який дозволяє зменшити видимість сивого волосся за допомогою фарби за 5-10 хвилин.",
        price: 70
    },
    {
        id: 8,
        img: images.beard_camouflage,
        title: "Камуфляж сивого волосся: борода",
        descr: "Камуфляж сивого волосся на бороді або голові - це процес нанесення фарби на волосся за допомогою спеціальної кисті. Пару хвилин нанесення, очікування дії від 5 до 10 хвилин, залежно від бажаного ефекту, і миття волосся теплою водою. Результат тримається від двох до трьох тижнів.",
        price: 40
    }
]
