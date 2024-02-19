import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Men from '@/assets/collection-homme.jpg';
import Women from '@/assets/collection-femme.jpg';
import Child from '@/assets/collection-junior.jpg';
import styles from './carousel.module.css';

function CustomSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode: true, // Active le mode centré
    centerPadding: '65px', // Ajuste l'espace entre les éléments
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={styles.slider}>
      <div className={styles.section}>
        <div className={styles.card}>
          <Image 
            src={Men}
            alt="Collection Hommes"
            layout="responsive"
            width={400}
            height={300}
          /> 
        </div>
        <h3 className={styles.h3}> COLLECTION HOMMES</h3>
        <p className={styles.p}> Découvrir la collection hommes</p>
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          <Image 
            src={Women}
            alt="Collection Femmes"
            layout="responsive"
            width={400}
            height={300}
          /> 
        </div>
        <h3 className={styles.h3}> COLLECTION FEMMES</h3>
        <p className={styles.p}> Découvrir la collection femmes</p> 
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          <Image 
            src={Child}
            alt="Collection Juniors"
            layout="responsive"
            width={400}
            height={300}
          /> 
        </div>
        <h3 className={styles.h3}> COLLECTION JUNIORS</h3>
        <p className={styles.p}> Découvrir la collection juniors</p>
      </div>
    </Slider>
  );
}

export default CustomSlider;


