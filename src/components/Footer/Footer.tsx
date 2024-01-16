import React from 'react';
import styles from './styles.module.css'
import CopyrightSvg from '../CopyrightSvg/CopyrightSvg';
import InstaSvg from '../InstaSvg/InstaSvg';
import TgSvg from '../TgSvg/TgSvg';
import GmailSvg from '../GmailSvg/GmailSvg';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.flex}>
                <div className={styles.gif}></div>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Головна</Link>
                    <Link href="/products" className={styles.link}>Проекти</Link>
                    <Link href="/news" className={styles.link}>Створити</Link>
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