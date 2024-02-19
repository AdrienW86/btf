import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import Logo from '@/assets/logo.png';
import Box from '@/assets/box.png';
import Men from '@/assets/hommes2.png';
import Women from '@/assets/femmes.png';
import Child from '@/assets/juniors3.png';
import Maillot from '@/assets/psg.png';
import Socket from '@/assets/yellow.jpg';
import Balm from '@/assets/tiger-red.webp';
import styles from './hamburger.module.css';

const Hamburger = ({productsLength}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.hamburger_container}>
      <Image 
        src={Logo}
        height={42}
        width={82}
        className={styles.logo}
        alt="image du logo"
      />   
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle}>
        <span className={styles.line}> </span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li className={styles.menu_link}>
            <div>
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
                <p className={styles.linkText}> MAILLOTS </p> 
                <Image 
                  src={Maillot}
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
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
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
              <Link href='/' className={styles.link}> 
                <p className={styles.linkText}> BON PLANS </p> 
              </Link>
            </div>
          </li> 
          <li className={styles.menu_link}>
            <div>
              <Link href='/' className={styles.link}> 
                <p className={styles.linkText}> PACKS </p> 
              </Link>
            </div>
          </li> 
        </ul>
      )}
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
  );
};
export default Hamburger;