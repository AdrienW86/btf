import React from 'react';
import styles from './media.module.css';

function NasserVideo() {
  return (
   <>  
    <div className={styles.banner2}> 
      <div className={styles.info}>  Profitez de nos offres du moment. <span className={styles.span}> J'en profite </span> </div>
      <video poster="/nasser.png" controls className={styles.banner} preload="auto">
        <source src="/nasser.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <button className={styles.btn}> Découvrir </button>
    </div>
   </>
  );
}

export default NasserVideo;