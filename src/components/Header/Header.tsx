import React from 'react';
import styles from './styles.module.css'

function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>
            <strong>
                Hi, my name is <em>Reklamax</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className={styles.header__text}>
            <p>with passion for learning and creating.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Header