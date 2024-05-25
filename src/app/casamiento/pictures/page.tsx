"use client"
import { getPictures } from '@/app/lib/data'
import Picture from '@/app/lib/interfaces'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {
  ChevronLeftIcon
} from '@heroicons/react/24/outline';

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
    <div className={styles.container}>
      
      <div>
      <ChevronLeftIcon onClick={()=> window.history.back()} className={styles.chevron_left} />
      </div>

    <div className={styles.pictures_container} >
      {Pictures 
      && Pictures.map((picture) => (
        <div key={picture.id} className={styles.picture_container}>
          <Image 
          src={picture.url} 
          alt={'casamiento'} 
          width={50}
          height={50}
          className={styles.picture} 
          />
        </div>
      ))}
    </div>

    </div>
  )
}
