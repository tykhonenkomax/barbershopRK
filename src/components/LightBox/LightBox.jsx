import React, { useEffect } from 'react';
import './lightBox.scss';

const LightBox = ({ src, isOpen, setIsOpen }) => {
  const lightBox = document.querySelector('.lightBox');

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target === lightBox || e.target.getAttribute('data-close') === '') {
        setIsOpen(false);
      }
    })
  }, [lightBox,setIsOpen]);

  // disable scrolling when the menu is open
  useEffect(() => {
    isOpen ?
      document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <div className={isOpen ? "lightBox show" : "lightBox hide"}>
      <div className="lightBox__dialog">
        <div className="lightBox__content">
          <div data-close className="lightBox__close" onClick={() => setIsOpen(false)}>&times;</div>
          <img className='lightBox__img' src={src} alt="lightBox-img" />
        </div>
      </div>
    </div>
  )
}

export default LightBox;
