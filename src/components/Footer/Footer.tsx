import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoMini from '../../../public/img/Logo_reklamaxMini.png';
import CopyrightSvg from '../Svg/CopyrightSvg/CopyrightSvg';
import InstaSvg from '../Svg/InstaSvg/InstaSvg';
import TgSvg from '../Svg/TgSvg/TgSvg';
import GmailSvg from '../Svg/GmailSvg/GmailSvg';
import styles from './styles.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.flex}>
                <Image src={logoMini} className={styles.gif} alt='error img'/>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Головна</Link>
                    <Link href="/products" className={styles.link}>Проекти</Link>
                    <Link href="/create" className={styles.link}>Створити</Link>
                </div>
            </div>
            <div className={styles.flex2}>
                <div className={styles.text}>
                    <CopyrightSvg/>
                    <p className={styles.p}>Copyright Reklamax 2024</p>
                </div>
                <div className={styles.links2}>
                    <a href='https://t.me/reklamax_team' target='_blank' className={styles.link2}>
                        <TgSvg/>
                    </a>
                    <a href='https://www.instagram.com/_reklamax_/' target='_blank' className={styles.link2}>
                        <InstaSvg/>
                    </a>
                    <a href='mailto:reklamax.team@gmail.com' target='_blank' className={styles.link2}>
                        <GmailSvg/>
                    </a>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer