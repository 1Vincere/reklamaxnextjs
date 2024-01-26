import React from 'react';
import Link from "next/link"
import styles from './styles.module.css'
import Image from 'next/image';
import logo from '../../../public/img/logo_reklamax.png'
import MenuSvg from '../Svg/Menu/Menu';

function Nav() {

    return (
        <div className={styles.nav}>
          <Image className={styles.logo} src={logo} alt="logo"/>
          <div className={styles.navSvg}>
            <MenuSvg/>
          </div>
          <div className={styles.navLinks}>
            <Link href="/">Головна</Link>
            <Link href="/products">Проекти</Link>
            <Link href="/create">Створити</Link>
          </div>
        </div>
    )
  }
  
  export default Nav