/**
 * Layout
 */
import React, { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
/* styles */
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout
 * @param param0 
 * @returns 
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main> 
      <Footer />
    </div>
  );
};

export default Layout;
