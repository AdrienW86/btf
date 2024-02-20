import React from 'react';
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './categoryCarousel.module.css'

function CategoryCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode: true, 
    centerPadding: '85px',
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
      <Link href={props.sportswear}>
        <div className={styles.section}>
          <div className={styles.card}>
            <button className={styles.btn}> Survêtements </button>
          </div>
          
        </div>
      </Link>
      <Link href={props.maillots}>
        <div className={styles.section}>
          <div className={styles.card}>
            <button className={styles.btn}> Maillots </button>
          </div>          
        </div>
      </Link>
      <Link href={props.shorts}>
        <div className={styles.section}>
          <div className={styles.card}>
            <button className={styles.btn}> Shorts </button>
          </div>
          
        </div>
      </Link>
      <Link href={props.accessoires}>
        <div className={styles.section}>
          <div className={styles.card}>
            <button className={styles.btn}> Accessoires </button>
          </div>
        </div>
      </Link>
    </Slider>
  );
}

export default CategoryCarousel;