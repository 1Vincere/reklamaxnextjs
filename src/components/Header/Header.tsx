import React from 'react';
import styles from './styles.module.css'

function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>
            <strong>
              Вас вітає рекламна агенція <em>Reklamax</em>
            </strong>
            <br />Ми займаємося цифровізацією ваших ідей
          </h1>
          <div className={styles.header__text}>
            <p>Створимо проєкт разом.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Header