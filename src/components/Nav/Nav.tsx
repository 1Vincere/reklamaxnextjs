"use client"
import React, { useState } from 'react';
import Link from "next/link";
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../../public/img/logo_reklamax.png';
import MenuSvg from '../Svg/Menu/Menu';

function Nav() {
    const [click, setClick] = useState('');

    const handleNavSvgClick = () => {
        // Если текущее значение click равно 'active', убираем класс, иначе добавляем
        setClick((prevClick) => (prevClick === 'active' ? '' : 'active'));
    };

    return (
        <div className={styles.nav}>
            <Image priority={true} className={styles.logo} src={logo} alt="logo"/>
            <div className={`${styles.navSvg} ${click === 'active' ? styles.navSvgActive : ''}`} onClick={handleNavSvgClick}>
                <MenuSvg/>
            </div>
            <div className={`${styles.navLinks} ${click === 'active' ? styles.navLinksActive : ''}`}>
                <Link href="/">Головна</Link>
                <Link href="/products">Проекти</Link>
                <Link href="/create">Створити</Link>
            </div>
        </div>
    );
}

export default Nav;
