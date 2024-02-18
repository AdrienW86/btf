import React, { useState, useRef } from 'react';
import styles from './media.module.css';

function NasserVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.banner2}>
      <video poster="/nasser.png" ref={videoRef} className={styles.banner} preload="auto">
        <source src="/nasser.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
      <button className={styles.playButton} onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default NasserVideo;
