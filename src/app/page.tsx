import Image from "next/image";
import styles from "./page.module.css";
import { herr_Von_Muellerhoff } from "./ui/fonts";
import CountdownTimer from "./ui/countDown/CountdownTimer";
import Link from "next/link";

export default function Home() {

  const targetDate = 'December 6, 2024, 12:00:00';

  return (
    <main className={styles.main}>


      <div className={`${styles.title} ${herr_Von_Muellerhoff.className}`}>
        Casamiento Cami y Mati
      </div>
      
      <div className={styles.image_container}>
        <Link href={'/casamiento'} >
          <Image
            src={'/IMG-20211129-WA0015.jpg'}
            alt="Foto de Mati y Cami"
            width={300}
            height={300}
            className={styles.image}
          />
        </Link>
      </div>
      <div className={`${styles.image_text} ${herr_Von_Muellerhoff.className}`}>
        Hace click y entra a nuestro casamiento!
      </div>

      <CountdownTimer
        targetDate={targetDate}
        className={styles.countdownTimer} />

    </main>
  );
}
