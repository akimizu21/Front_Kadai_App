/**
 * Header
 */
import React from 'react';
import Button from '../Button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
/* styles */
import styles from './Header.module.css';

/**
 * Header
 * @returns 
 */
const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <img src="img/logo.png" alt="logo" className={styles.logo} />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Button
              label='Profile'
              type='button'
              variant='primary'
              width='120px'
              height='40px'
            />
          </li>
          <li className={styles.navItem}>
            <Button
              label='Edit'
              type='button'
              variant='primary'
              width='120px'
              height='40px'
              icon={faPen}
              iconPosition='left'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
