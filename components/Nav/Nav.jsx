import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Hamburger from '../Hamburger/Hamburger';
import styles from './nav.module.css';

export default function Nav() {
  const router = useRouter();
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    if (router.pathname === '/success') {
      localStorage.clear();
    } else {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    }

    const updateProductsLength = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    };
    window.addEventListener('cartChange', updateProductsLength);

    return () => {
      window.removeEventListener('cartChange', updateProductsLength);
    };
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>    
      <Hamburger productsLength={productsLength} className={styles.hamburger} />
    </nav>
  );
}