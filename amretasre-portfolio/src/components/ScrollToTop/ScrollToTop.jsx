import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
// import { FaArrowUp } from 'react-icons/fa';

import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/scroll-up.json';

export const ScrollToTop = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button if scrolled more than 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={styles.scrollToTop}
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <Lottie
                options={defaultOptions}
                height={70}
                width={70}
            />
        </button>
    );
};

// export default ScrollToTop;
