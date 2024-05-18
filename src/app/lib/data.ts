"use server"
import { connectDB } from './db.config';
import imageModel from './image-model.model';

export const insertPicture = async (image: FormData) => {
  connectDB()
  try {
    const uploadRes = await fetch('https://api.cloudinary.com/v1_1/marangadev/image/upload', {
      method: 'POST',
      body: image,
    });

    if (!uploadRes.ok) {
      throw new Error('Error al subir la imagen');
    }

    const data = await uploadRes.json();
    const { secure_url } = data;

    // Verifica si ImageGalleryModel.create está definido
    console.log(imageModel);
    
    const saved = await imageModel.create({
      image_url: secure_url,
    });

    return secure_url;
  } catch (error) {
    console.log(error);
  }
}
