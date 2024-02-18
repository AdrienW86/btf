import React from 'react';
import styles from './media.module.css';

function NasserVideo() {
  return (
    <div className={styles.banner2}>
      <div className={styles.info}>  Profitez de nos packs. <span>J'y vais </span> </div>
      <video poster="/nasser.png" controls className={styles.banner} preload="auto">
        <source src="/nasser.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
    </div>
  );
}

export default NasserVideo;
