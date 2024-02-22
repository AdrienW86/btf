// Finder.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './finder.module.css';

export default function Finder({results, toggle}) {
  return (
    <div className={styles.search}>
      <h2 className={styles.h2}>Résultats de la recherche :</h2>
       <button  className={styles.close} onClick={toggle}> X</button>
      {/* Affichage des résultats de la recherche */}
      {results.length  
      ?
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <Link href={result.url}>
              <h3 className={styles.h3}>{result.title} </h3> 
            </Link>
          </li>
        ))}
      </ul>
      : <p> Aucun résultats trouvés</p>
      }
    </div>
  );
}
