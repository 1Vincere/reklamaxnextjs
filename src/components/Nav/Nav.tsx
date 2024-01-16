import React from 'react';
import Link from "next/link"
import styles from './styles.module.css'
import Image from 'next/image';
import Logo from '../../../public/img/Logo.png'

function Nav() {

    return (
        <div className={styles.nav}>
          <Image
          src={Logo}
          alt="logo"
          width={90}
          />
          <div>
            <Link href="/">Головна</Link>
            <Link href="/products">Проекти</Link>
            <Link href="/news">Створити</Link>
          </div>
        </div>
    )
  }
  
  export default Nav