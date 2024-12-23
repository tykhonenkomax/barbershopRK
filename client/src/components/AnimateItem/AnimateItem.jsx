import React, {useEffect} from 'react';
import './animateItem.scss';

const AnimateItem = ({url,side}) => {

  // const bg = document.querySelector('.animateItem__img');
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let offsetY = window.scrollY;
  //     bg.style.transform = `translateY(${offsetY * 0.4 }px)`
  //   })
    
  // },[]);




    useEffect(() => {
        window.addEventListener("scroll", animation1);
        return () => {
          window.removeEventListener("scroll", animation1);
        };
      });
    
      const animation1 = () => {      
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const animateItems = document.querySelectorAll('.animateItem__img');
    
        animateItems.forEach(item => {
          const getItemCoords = item.getBoundingClientRect().top;
          if (scrollTop >= getItemCoords && getItemCoords > 0) {
            item.style.transform = `translateY(${getItemCoords / 15}px)`;
          } 
        });
      };

  return (
    <div  className='animateItem'>
        <img className={side === "left" ? "animateItem__img animate-item-left": "animateItem__img animate-item-right"}  src={url} alt="animate-item " />
    </div>
  )
}

export default AnimateItem;
