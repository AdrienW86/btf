import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { data } from '@/data/sportswer';
import styles from './product.module.css';

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  // Recherchez les détails de l'article correspondant à l'identifiant dans vos données
  const product = data.men.find((el) => el.id === productId);

  // Si l'identifiant de l'article n'est pas trouvé ou s'il n'y a pas de produit correspondant, affichez un message d'erreur
  if (!product) {
    return <div>Cet article n'existe pas</div>;
  }

  // État local pour stocker l'URL des images et le bouton actif
  const [currentImage, setCurrentImage] = useState(product.recto);
  const [activeButton, setActiveButton] = useState('recto');

  // Fonction pour basculer entre les images
  const toggleImage = (imageUrl, buttonType) => {
    setCurrentImage(imageUrl);
    setActiveButton(buttonType);
  };

  // Affichez les détails de l'article
  return (
    <div className={styles.container}>
      <section className={styles.banner}>                    
        <Image 
          src={currentImage}
          fill
          priority       
          alt='banner'
          className={styles.background}
        />  
      </section> 
      <div className={styles.btnContainer}>
        <button 
          className={activeButton === 'recto' ? styles.activeButton : styles.button}
          onClick={() => toggleImage(product.recto, 'recto')}
        >      
        </button>
        <button 
          className={activeButton === 'verso' ? styles.activeButton : styles.button}
          onClick={() => toggleImage(product.verso, 'verso')}
        >       
        </button>
      </div>
      <h1 className={styles.h1}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>Prix: {product.price}€</p>
      
      {/* Boutons pour basculer entre les images */}
      
      
    </div>
  );
}


