/**
 * Footer
 */
import React from 'react';
/* styles */
import styles from './Footer.module.css';

/**
 * Footer
 * @returns 
 */
const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 TodoList</p>
    </footer>
  );
};

export default Footer;