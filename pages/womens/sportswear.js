import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Card from '@/components/Card/Card'
import Banner from '@/assets/survet-women.png'
import {data} from '@/data/sportswer'
import styles from './mens.module.css'

export default function sportswear() {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <section className={styles.container}>
       
          <section className={styles.banner}>       
            <h1 className={styles.h1}> Les survêtements Femmes </h1>
              <p className={styles.description}>                
                Découvrez notre collection de survêtements pour Femmes. Livraison rapide et gratuite à partir de 100€ d'achats.
              </p>
            <Image 
                src={Banner}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
            </section>  
            <section className={styles.cardContainer}>
            {data.women.map((el, index)=> (
              <Card 
                key={index}
                id={el.id}
                name={el.name}
                description={el.description}
                recto={el.recto}
                verso={el.verso}
                price={el.price}
                link={el.link}
                sizes={el.sizes} 
                selectedSize={selectedSize}
                onSizeChange={(size) => setSelectedSize(size)}
              />                     
            ))}              
        </section>
    </section>
  )
}