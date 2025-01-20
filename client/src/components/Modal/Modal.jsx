import React, { useState } from 'react';
import './Modal.scss';
import googleLogo from '../../assets/gogle.logo.webp';

export const Modal = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setIsVisible(false)}>
                    &times;
                </span>

                <div className="modal-header">
                    <img
                        src={googleLogo || undefined}
                        alt="Google logo"
                        className="google-logo"
                    />
                    <h3>Дайте свій відгук на Google</h3>
                </div>

                <p className="modal-description">Ваша оцінка важлива для нас! Залиште відгук на Google Maps.</p>

                <div className="star-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>

                <a
                    href="https://g.page/r/CTJA_DdBBT9DEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button"
                >
                    Залишити відгук
                </a>
            </div>
        </div>
    );
};
