import React from 'react'
import Image from 'next/image'
import Banner from '@/assets/survet.jpg'
import styles from './mens.module.css'

export default function sportswear() {
  return (
    <section className={styles.container}>
       
          <section className={styles.banner}>       
            <h1 className={styles.h1}> Les survêtements Hommes </h1>
              <p className={styles.description}>                
                Découvrez notre collection de survêtements pour Hommes. Livraison rapide et gratuite à partir de 100€ d'achats.
              </p>
            <Image 
                src={Banner}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
            </section>           
        
    </section>
  )
}