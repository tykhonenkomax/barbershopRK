import { AOSanimation } from '../../components';
import './about.scss';
const About = () => {
  return (
      <section className='about' id='about'>
        <div className="about__img"></div>
        <div className="about__inner">
          <div className="about__info">
            <AOSanimation animation="fade-up" duration="1000">
              <h3 className="about__subtitle " >- Welcome to -</h3>
            </AOSanimation>

            <AOSanimation animation="fade-up" duration="1500">
              <h2 className="about__title" >Rock N Roll Hair</h2>
            </AOSanimation>

            <p className="about__descr">
              Ми не просто перукарня для чоловіків і не просто клуб для еліти, ми саме те місце, де народжуються ваш стиль і ваша нова версія! Просто повірте нам, ми не кидаємо слова на вітер. Ми спеціалізуємося на стильних чоловічих стрижках і голінні прямим бритвом, більше того, ми на 100% впевнені, що робимо це краще за інших.
              Наші барбери працюють над тим, щоб ви почувалися комфортно і завжди раділи своєму відображенню в дзеркалі. Ми подбаємо також про вашу дитину, щоб він завжди отримував чудову стрижку.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About;
