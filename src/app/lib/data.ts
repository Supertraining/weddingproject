"use server"
import { connectDB } from './db.config';
import imageModel from './image-model.model';
import Picture from './interfaces';
connectDB()
export const insertPicture = async (image: FormData) => {
  
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
    
    const saved = await imageModel.create({
      image_url: secure_url,
    });

    return secure_url;
  } catch (error) {
    console.log(error);
  }
}


export const getPictures = async () => {

  try {
    const pictures = await imageModel.find();
    const images: Picture[] = pictures.map((image) => {
      return {
        id: image._id.toString(),
        url: image.image_url
      }
    })
    return images;
  } catch (error) {
    console.log(error);
  }
}