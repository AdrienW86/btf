import React, { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import Banner from '@/assets/survet.jpg';
import { data } from '@/data/sportswer';
import styles from './mens.module.css';
import Link from 'next/link';

export default function Sportswear() {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <section className={styles.container}>
      <section className={styles.banner}>
        <h1 className={styles.h1}>Les survêtements Hommes</h1>
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
      <section className={styles.cardContainer}>
        {data.men.map((el, index) => (
          <Link href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${el.verso}&price=${el.price}&link=${el.link}&sizes=${el.sizes}&description=${el.description}`}>
          <Card
            id={el.id}
            name={el.name}
            recto={el.recto}
            verso={el.verso}
            price={el.price}
            url={el.url}
            sizes={el.sizes}
            description={el.description}
            selectedSize={selectedSize}
            onSizeChange={(size) => setSelectedSize(size)}
          />
        </Link>
        ))}
      </section>
    </section>
  );
}
