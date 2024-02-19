import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from '../Nav/Nav';
import Delivery from "@/assets/livraison.png";
import Search from "@/assets/search.png"
import styles from './header.module.css';

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
      <section className={styles.delivery}>
        <div className={styles.deliveryContent}>
          <div className={styles.deliveryImg}>
            <Image 
              src={Delivery}
              height={20}
              width={20}
            />
          </div>
          <p className={styles.deliveryTxt}>
            LIVRAISON OFFERTE À PARTIR DE 100€ D'ACHAT 
          </p>
        </div>
      </section>
      <section className={styles.title}> 
        <Nav />
        <div className={styles.inputContainer}>
          <input 
            className={styles.input} 
            placeholder="Rechercher un produit, une catégorie..."
          />
          <div className={styles.imgBox}>
            <Image 
              src={Search}
              alt="Description de l'image"
              height={20}
              width={20}
            />
          </div>         
        </div>
      </section>
    </header>
  );
}
