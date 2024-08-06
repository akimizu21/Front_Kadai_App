/**
 * Header
 */
import React from 'react';
import Image from 'next/image';
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
      <Image src="img/logo.png" alt="logo" width={100} height={24}/>
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
