import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import styles from './category.module.css'

export default function Category({picture}) {
  return (

    <>
      <h1 className={styles.title}> NOS COLLECTIONS </h1>
      <Carousel />
    </>
   
  )
}