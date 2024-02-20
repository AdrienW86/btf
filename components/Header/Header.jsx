import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Basket from '@/assets/basket.png';
import Logo from '@/assets/logo.png';
import Box from '@/assets/box.png';
import Men from '@/assets/hommes2.png';
import Women from '@/assets/femmes.png';
import Child from '@/assets/juniors3.png';
import Maillot from '@/assets/maillots_hommes/psg.png';
import Socket from '@/assets/yellow.jpg';
import Balm from '@/assets/tiger-red.webp';
import Delivery from "@/assets/livraison.png";
import Search from "@/assets/search.png"
import styles from './header.module.css';

export default function Header() {

const router = useRouter()
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);
const [productsLength, setProductsLength] = useState(0);
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen);
};

useEffect(() => {
  const handleScroll = () => {
    if (isMenuOpen) {
      console.log('empeche')
      document.body.style.overflow = 'hidden';
    } else {
      // Activer le défilement si le menu est fermé
      document.body.style.overflow = 'visible';
    }
  };

  // Ajouter l'écouteur d'événement lorsqu'un changement est détecté dans isMenuOpen
  window.addEventListener('scroll', handleScroll);

  // Nettoyer l'écouteur d'événement lorsque le composant est démonté
  return () => {
    window.removeEventListener('scroll', handleScroll);
    // Rétablir la valeur de l'overflow lorsque le composant est démonté
    document.body.style.overflow = 'visible';
  };
}, [isMenuOpen]);


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

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        // Empêcher le défilement si le menu est ouvert
        document.body.style.overflow = 'hidden';
      } else {
        // Activer le défilement si le menu est fermé
        document.body.style.overflow = 'visible';
      }
    };
  
    // Ajouter l'écouteur d'événement lorsqu'un changement est détecté dans isMenuOpen
    window.addEventListener('scroll', handleScroll);
  
    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);
  
  return (
  <>
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden} `}>
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
          <Link href='/'> 
            <Image 
              src={Logo}
              height={42}
              width={82}
              className={styles.logo}
              alt="image du logo"
            />   
          </Link>
          <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle}>
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </section>
      <section className={styles.title}> 
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
    <section className={`${styles.menuBox} ${isMenuOpen ? styles.menuBoxOpen : ''}`}>
    {isMenuOpen && (
       
       <ul className={styles.menu}>
       <li className={styles.menu_link}>
         <div>
           <Link href='/mens' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> HOMMES </p> 
             <Image 
               src={Men}
               height={70}
               width={50}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/womens' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> FEMMES </p> 
             <Image 
               src={Women}
               height={70}
               width={70}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/kids' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> JUNIORS </p> 
             <Image 
               src={Child}
               height={70}
               width={60}
               className={styles.linkImg}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/maillots' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> MAILLOTS </p> 
             <Image 
               src={Maillot}
               height={70}
               width={45}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/sockets' className={styles.link} onClick={handleMenuToggle}> 
             <p className={styles.linkText}> CHAUSSETTES </p> 
             <Image 
               src={Socket}
               height={60}
               width={40}
               className={styles.linkImg1}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/balms' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> BAUMES </p> 
             <Image 
               src={Balm}
               height={60}
               width={50}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li>
       <li className={styles.menu_link}>
         <div>
         <Link href='/boxs' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> COFFRETS </p> 
             <Image 
               src={Box}
               height={70}
               width={60}
               className={styles.linkImg2}
               alt="image du panier"
             />   
           </Link>
         </div>
       </li> 
       <li className={styles.menu_link}>
         <div>
         <Link href='/good-deal' className={styles.link} onClick={handleMenuToggle}>
             <p className={styles.linkText}> BON PLANS </p> 
           </Link>
         </div>
       </li> 
     </ul>
    
     )}
     <section/>
      <Link  href='/card'> 
        <li className={styles.menu_basket}>
          <Image 
            src={Basket}
            height={22}
            width={22}
            className={styles.logoBasket}
            alt="image du panier"
          />         
          {productsLength === 0 ? null : 
            <span className={styles.span}>{productsLength && `${productsLength}`}</span> 
          }
        </li>      
      </Link>
    </section>
  </>
  );
}
