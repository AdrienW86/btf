import React, { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import Banner from '@/assets/sweet-banner-junior.jpg';
import { data } from '@/data/sportswer';
import Link from 'next/link';
import styles from '@/styles/mens.module.css';

export default function Sportswear() {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <section className={styles.container}>
      <section className={styles.banner}>
        <h1 className={styles.h1}>Les survêtements Juniors</h1>
        <p className={styles.description}>
          Découvrez notre collection de survêtements pour Juniors. Livraison rapide et gratuite à partir de 100€ d'achats.
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
        {data.juniors.map((el, index) => (
          <div className={styles.link}>
          <Link href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${el.verso}&price=${el.price}&link=${el.link}&sizes=${el.sizes}&description=${el.description}`}>
          <Card
            id={el.id}
            name={el.name}
            recto={el.recto}
            verso={el.verso}
            price={el.price}
            sizes={el.sizes}
            description={el.description}
            selectedSize={selectedSize}
            onSizeChange={(size) => setSelectedSize(size)}
          />
        </Link>
        </div>
        ))}
      </section>
      <PaymentBanner/>
    </section>
  );
}