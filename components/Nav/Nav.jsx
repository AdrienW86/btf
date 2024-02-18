import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from '../Hamburger/Hamburger';
import styles from './nav.module.css';

export default function Nav() {
  const router = useRouter();
  const activePath = router.pathname;
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    if (router.pathname === '/success') {
      // Efface le stockage local si l'URL est "/success"
      localStorage.clear();
    } else {
      // Met à jour la longueur des produits dans le stockage local
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
