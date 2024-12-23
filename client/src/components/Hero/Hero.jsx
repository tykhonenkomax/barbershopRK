import React from 'react';
import { Button } from '../../components';
import './hero.scss';

const Hero = () => {
    return (
        <section className='hero' id='home'>
            <div className="hero__bg"></div>
            <div className="hero__wrapper container">
                <h3 className='hero__subtitle'>- Класичні стрижки & Гоління -</h3>
                <h1 className='hero__title'>Наші стилі волосся<br/>покращують вашу усмішку.</h1>
                <p className="hero__descr">Наша перукарня - це територія, створена виключно для чоловіків, які
                    цінують <br/> преміальну якість, час та бездоганний вигляд.</p>

                <a className="hero__btn" href="https://w.wlaunch.net/c/rock_n_roll_hair/b/4926a617-9693-11ea-8c6f-75bfbdeb2ab4/s">
                    <Button text="Записатися"/>
                </a>
            </div>
        </section>
    );
}

export default Hero;
