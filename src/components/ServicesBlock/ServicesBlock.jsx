import { AnimateItem, Divider, Tabs, AOSanimation } from '../../components';
import { images } from '../../constants';
import './servicesBlock.scss';

const ServicesBlock = () => {
    return (
        <section className='services' id='services'>

            <AnimateItem url={images.brush} />
            <AOSanimation animation="fade-up" duration="1000">
                <h2 className="services__title">- Наш прайс-лист -</h2>
            </AOSanimation>
            <AOSanimation animation="fade-up" duration="1500">
                <p className="services__descr">
                    Ми формуємо ціни виходячи з досвіду наших майстрів. Що саме обирати це залежить тільки від тебе.
                </p>
            </AOSanimation>
            <Divider />
            <Tabs />
        </section>
    )
}

export default ServicesBlock;
