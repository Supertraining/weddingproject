"use client"
import React, { useRef } from 'react';
import { insertPicture } from '@/app/lib/data';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import styles from './page.module.css'

export default function UploadPictures() {

  const [image, setImage] = useState<File | null | undefined>(null);
  const [isDragging, setIsDragging] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.group('change')
      setImage(e.target.files[0])
    }
  };

  const handleOnDragOver = (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDragging(true)
  }
  const handleOnDragLeave = (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDragging(false)
  }
  const handleDrop = async (e: React.DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDragging(false)
  

    if(e.dataTransfer.files && e.dataTransfer.files.length > 0) {
   
  console.log(e.dataTransfer.files[0])
  
      const data = new FormData();
      data.append('file', e.dataTransfer.files[0]);
      data.append('upload_preset', 'jtm5a5jy');
      try {
        const url: string = await insertPicture(data);
        console.log(url)
        if (url && formRef.current) {
            formRef.current.reset()
            setImage(null)
        }

      } catch (error) {
        console.log('Error al subir la imagen:', error);
      }
    }
   
    
   

  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (image) {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'jtm5a5jy');
      try {
        const url: string = await insertPicture(data);
        console.log(url)
        if (url && formRef.current) {
            formRef.current.reset()
            setImage(null)
        }

      } catch (error) {
        console.log('Error al subir la imagen:', error);
      }
    }
  }

  return (
    <div className={styles.formContainer}>

    <div>
      <ChevronLeftIcon onClick={()=> window.history.back()} className={styles.chevron_left} />
      </div>
      <form onSubmit={handleSubmit} ref={formRef} 
            className={isDragging ? styles.drag : styles.form}
            onDragOver={handleOnDragOver}
            onDragLeave={handleOnDragLeave}
            onDrop={handleDrop}
            onChange={handleChange}
              >
        <div 
        className={styles.folderIcon}
        
        >
          <span className={styles.span}>Arrastra y suelta tu imagen</span>
        </div>
        <input
          type="file"
          id="file"
         style={{display: 'none'}}
        />
      </form>
    </div>
  )
}
