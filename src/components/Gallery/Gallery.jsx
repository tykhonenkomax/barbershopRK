import React, { useState } from 'react';
import { Divider, LightBox, AOSanimation } from '../../components';
import { images } from '../../constants';
import './gallery.scss';

const imgsSrc = [images.img1, images.img2, images.img5, images.img12, images.img6, images.img9, images.img7, images.img4, images.img11, images.img10];

export const Gallery = () => {
    const [src, setSrc] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setSrc(e.target.src);
        setIsOpen(!isOpen);
    }

    const gallery = imgsSrc.map((img, i) =>
        <div key={i} className='gallery__item' id={'item-' + i} onClick={handleClick}>
            <img className='gallery__bg' src={img} alt="grid-img" />
        </div>
    );

    return (
        <>
            <LightBox src={src} isOpen={isOpen} setIsOpen={setIsOpen} />
            <section className="gallery" id='gallery'>
                <AOSanimation animation="fade-up" duration="1000">
                    <h2 className="gallery__title">- Галерея -</h2>
                </AOSanimation>

                <Divider />
                <div className="gallery__grid">
                    {gallery}
                </div>
            </section>
        </>
    )
}

export default Gallery;
