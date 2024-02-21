import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Banner from '@/assets/men-maillots.jpg'
import Liga from '@/assets/liga.png'
import Ligue1 from '@/assets/ligue1.png'
import SerieA from '@/assets/serieA.png'
import Premier from '@/assets/premier.png'
import Bundesliga from '@/assets/bundesliga.png'
import Caf from '@/assets/caf.png'
import Uefa from '@/assets/uefa.png'
import Card from '@/components/Card/Card'
import { data } from '@/data/maillots'
import styles from './mens.module.css'

export default function maillots() {
    const [selectedSection, setSelectedSection] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const handleDropdownChange = (event) => {
    setSelectedSection(event.target.value);
    scrollToSection(event.target.value);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 0; 
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 600; 
    setShowScrollButton(scrollPosition > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <section className={styles.container}>    
        <section className={styles.banner}>       
            <h1 className={styles.h1}> Les Maillots Hommes </h1>
                <p className={styles.description}>                
                    Découvrez notre collection de maillots pour Hommes. Livraison rapide et gratuite à partir de 100€ d'achats.
                </p>
            <Image 
                src={Banner}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
        </section> 
        <section className={styles.dropdownContainer}>
            <div className={styles.box}>
                <label className={styles.label} htmlFor="sectionDropdown">Rechercher un club :</label>
                <div className={styles.team}>       
                    <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
                        <option value=""> Sélectionnez une ligue </option>
                        <option value="ligue1"> Ligue 1 </option>
                        <option value="liga"> Liga </option>
                        <option value="premier"> Premier League </option>
                        <option value="serieA"> Série A</option>
                        <option value="bundesliga"> Bundesliga </option>
                        <option value="others"> Autres clubs </option>
                    </select>  
                </div>
            </div>
            <div className={styles.box}>
                <label className={styles.label} htmlFor="sectionDropdown"> Rechercher un pays :</label>
                <div className={styles.team}>       
                    <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
                        <option value=""> Sélectionnez un continent </option>
                        <option value="afrique"> Afrique </option>
                        <option value="europe"> Europe </option>
                       
                    </select>  
                </div>
            </div>    
        </section>
        <section className={styles.products}>
            <div id="ligue1" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Ligue 1 </h2>     
                    <Image 
                        src={Ligue1}
                        width={80} 
                        height={80}   
                        alt='ligue 1'
                        className={styles.logo}
                    />  
                </div>       
                {data.ligue1.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div>
            <div id="liga" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Liga </h2>     
                    <Image 
                        src={Liga}
                        width={80} 
                        height={80}   
                        alt='liga'
                        className={styles.logo}
                    />  
                </div>           
                {data.liga.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="premier" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Premier League </h2>     
                    <Image 
                        src={Premier}
                        width={70} 
                        height={80}   
                        alt='premier league'
                        className={styles.logo}
                    />  
                </div>    
                {data.premierLeague.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="serieA" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Serie A </h2>     
                    <Image 
                        src={SerieA}
                        width={70} 
                        height={100}   
                        alt='serie A'
                        className={styles.logo2}
                    />  
                </div>     
                {data.serieA.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="bundesliga" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Bundesliga </h2>     
                    <Image 
                        src={Bundesliga}
                        width={80} 
                        height={80}   
                        alt='bundesliga'
                        className={styles.logo}
                    />  
                </div>     
                {data.bundesliga.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="others" className={styles.cardContainer}> 
                <h2 className={styles.h2}> Les autres clubs </h2>      
                {data.others.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="afrique" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Afrique </h2>     
                    <Image 
                        src={Caf}
                        width={80} 
                        height={80}   
                        alt='caf'
                        className={styles.logo}
                    />  
                </div>     
                {data.afrique.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
            <div id="europe" className={styles.cardContainer}> 
                <div className={styles.categoryTitle}>
                    <h2  className={styles.h2}> Europe </h2>     
                    <Image 
                        src={Uefa}
                        width={80} 
                        height={80}   
                        alt='uefa'
                        className={styles.logo}
                    />  
                </div>      
                {data.europe.map((el, index)=> (
                    <Card 
                        key={index}
                        id={el.id}
                        name={el.name}
                        recto={el.recto}
                        verso={el.verso}
                        price={el.price}
                        link={el.link}
                        sizes={el.sizes} 
                        description={el.description}
                        selectedSize={selectedSize}
                        onSizeChange={(size) => setSelectedSize(size)}
                    /> 
                ))}              
            </div> 
        </section>            
    </section>
  )
}
