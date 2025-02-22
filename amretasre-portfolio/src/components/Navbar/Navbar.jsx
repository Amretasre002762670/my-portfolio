import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
// import {} from "../../../assets"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navbarRef = useRef(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedItem(menuItem);
    };

    const toggleDarkMode = () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        const themeImage = document.getElementById('themeImage'); // Get the image element

        if (currentTheme === 'dark') {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); 
            themeImage.src = getImageUrl("icons/happy_moon.png"); 
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); 
            themeImage.src = getImageUrl("icons/sun.png"); 
        }
    };

    // Immediately set theme based on saved preference when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const root = document.documentElement;
        const themeImage = document.getElementById('themeImage');

        root.setAttribute('data-theme', savedTheme);
        themeImage.src = savedTheme === 'dark' ? getImageUrl("icons/sun.png") : getImageUrl("icons/happy_moon.png");
    });



    const handleOutsideClick = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    return <nav ref={navbarRef} className={styles.navbar}>
        <a href="/" className={styles.title}>&lt;Dream, Believe and Achieve /&gt;</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-btn" onClick={() => { setMenuOpen(!menuOpen) }} />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li className={selectedItem === 'about' ? styles.selectedMenuItem : ''}><a href="#about" onClick={() => handleMenuItemClick('about')}>About</a></li>
                <li className={selectedItem === 'education' ? styles.selectedMenuItem : ''}><a href="#education" onClick={() => handleMenuItemClick('education')}>Education</a></li>
                <li className={selectedItem === 'experience' ? styles.selectedMenuItem : ''}><a href="#experience" onClick={() => handleMenuItemClick('experience')}>Experience</a></li>
                <li className={selectedItem === 'projects' ? styles.selectedMenuItem : ''}><a href="#projects" onClick={() => handleMenuItemClick('projects')}>Projects</a></li>
                <li className={selectedItem === 'contact' ? styles.selectedMenuItem : ''}><a href="#contact" onClick={() => handleMenuItemClick('contact')}>Contact</a></li>
                <li>
                    <span className={styles.modeButtonContainer} onClick={toggleDarkMode} id="themeButton">
                        <img id="themeImage" className={styles.modeButton} src={getImageUrl("icons/happy_moon.png")} alt="Theme" />
                    </span>
                </li>
            </ul>


        </div>
    </nav>;
}