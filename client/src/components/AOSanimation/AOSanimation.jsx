import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSanimation = ({ children, animation, duration }) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos={animation} data-aos-duration = {duration ? duration : ''}>
      {children}
    </div>
  )
}

export default AOSanimation;
