import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Snap from '@/assets/snap.svg'
import styles from './footer.module.css'

export default function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
   <footer className={styles.footer}>
      <p className={styles.copyright}> © Boutique du foot - {currentYear}</p>
      <div className={styles.social}>
      <Image
        src={Snap}
        width={40}
        height={40}
        priority
        className={styles.picture}
        alt='Snapchat logo'       
        />
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}> <Link href='/mentions'> Mentions Légales </Link> </li>
        <li className={styles.li}> <Link href='/conditions'> Conditions Générales de vente </Link> </li>  
        <li className={styles.li}> <Link href='https://code-v.fr '> Réalisé par <span className={styles.span}> Codev </span> </Link>  </li>
      </ul>
   </footer>
  )
}