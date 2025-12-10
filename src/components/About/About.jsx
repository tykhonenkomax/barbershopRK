import {AOSanimation} from '../../components';
import './about.scss';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="about__img"></div>
            <div className="about__inner">
                <div className="about__info">
                    <AOSanimation animation="fade-up" duration="1000">
                        <h3 className="about__subtitle ">- Welcome to -</h3>
                    </AOSanimation>

                    <AOSanimation animation="fade-up" duration="1500">
                        <h2 className="about__title">Rock N Roll Hair</h2>
                    </AOSanimation>

                    <p className="about__descr">

                        Привіт! Довго думали, що написати в цьому розділі, і зрештою вирішили: ми пройшли довгий шлях з
                        1997 року. За цей час ми не тільки наливали віскі та працювали над рекламою, а й робили ще сотні
                        інших дрібниць. Але досвід показав одне головне — у барбершопі найважливіше — вміти стригти.

                        Наш концепт простий: ми вміємо стригти і дотримуємось свого принципу — слухаємо тільки
                        правильний саунд. Якщо хочеш випити, у нас є бар, і ти можеш підійти, вибрати напій і налити
                        собі, як тобі зручно. Нам приємно, коли люди почувають себе вільно, це створює відчуття правильної
                        атмосфери, відчуття, що ми все робимо правильно.

                        Ми з повагою ставимося до тебе і сподіваємось на взаємну повагу. Ми не намагаємось бути якимось
                        надзвичайним місцем — просто приходь і почувайся як вдома.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
