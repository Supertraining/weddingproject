"use client"
import { getPictures } from '@/app/lib/data'
import Picture from '@/app/lib/interfaces'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Pictures() {
  const [Pictures, setPictures] = useState<Picture[] | null>(null)
  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const pictures = await getPictures();
        pictures && setPictures(pictures);
        
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
  }, [])

  return (
    <div className={styles.pictures_container}>
      {Pictures 
      && Pictures.map((picture) => (
        <div key={picture.id} className={styles.picture_container}>
          <img src={picture.url} alt={''} className={styles.picture} />
          <p>TITULO DE LA FOTO</p>
        </div>
      ))}
    </div>
  )
}
