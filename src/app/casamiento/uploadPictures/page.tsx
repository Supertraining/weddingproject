"use client"
import { useRef } from 'react';
import { insertPicture } from '@/app/lib/data';
import {
  FolderIcon
} from '@heroicons/react/24/outline';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function UploadPictures() {

  const [image, setImage] = useState<File | null | undefined>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  };


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
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="file">
          <FolderIcon />
        </label>
        <input
          type="file"
          id="file"
          onChange={handleChange}

        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
