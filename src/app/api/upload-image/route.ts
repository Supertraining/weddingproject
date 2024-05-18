import { insertPicture } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  console.log(req.body);
  const image: any = req.body;

  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'jtm5a5jy');

  try {
    const url: string = await insertPicture(data);
    console.log(url);
    return NextResponse.json(
      { msg: url },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log('Error al subir la imagen:', error);
  }
};
