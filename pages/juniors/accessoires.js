import React from 'react'
import Image from 'next/image'
import Banner from '@/assets/accessoires.jpg'
import styles from '@/styles/mens.module.css'

export default function accessoires() {
  return (
    <section className={styles.container}>
        <div >    
          <section className={styles.banner}>       
            <h1 className={styles.h1}> Les accessoires </h1>
              <p className={styles.description}>                
                Découvrez notre collection d'accessoires pour Hommes. Livraison rapide et gratuite à partir de 100€ d'achats.
              </p>
            <Image 
                src={Banner}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
            </section>           
        </div>
    </section>
  )
}
