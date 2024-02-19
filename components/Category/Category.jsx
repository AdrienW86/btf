import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import CarouselVideo from '@/components/CarouselVideo/CarouselVideo'
import Banner1 from '@/assets/maillot-categorie.jpg'
import Banner2 from '@/assets/tapedesign.jpg'
import Banner3 from '@/assets/tiger.webp'
import Banner4 from '@/assets/bon-plan.jpg'
import styles from './category.module.css'

export default function Category({picture}) {
  return (

    <>
      <h1 className={styles.title}> NOS COLLECTIONS </h1>
      <Carousel />
      <h2 className={styles.title2}> LES MAILLOTS </h2>
      <section className={styles.banner}>
      <Image 
        src={Banner1}
        fill
        priority       
        alt='banner'
      />  
      </section>
      <h2 className={styles.title2}> LES CHAUSSETTES </h2>
      <section className={styles.banner}>
      <Image 
        src={Banner2}
        fill
        priority       
        alt='banner'
      />  
      </section>
      <h2 className={styles.title2}> LES BAUMES </h2>
      <section className={styles.banner}>
      <Image 
        src={Banner3}
        fill
        priority       
        alt='banner'
      />  
      </section>
      <h1 className={styles.title}> NOS COFFRETS </h1>
      <CarouselVideo />
      <h2 className={styles.title2}> LES BONS PLANS </h2>
      <section className={styles.banner}>
      <Image 
        src={Banner4}
        fill
        priority       
        alt='banner'
      />  
      <button className={styles.btn}>
        Découvrir les offres
      </button>
      </section>

    </>
   
  )
}