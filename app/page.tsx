import Image from "next/image";
import styles from "./page.module.css";

import SocialButton from "@/components/SocialButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          className={styles.logo}
          src={'/logo.png'}
          width={130}
          height={130}
          quality={100}
          alt="logo site"
        />
        <h1 className={styles.title}>
          Movimento Ceará
        </h1>
        <p className={styles.text}>
        Associação dos Educadores 
        Populares do Ceará 
        </p>
        <p className={styles.text}>
          Educação Popular que <strong className={styles.strong}>inspira, conecta e transforma.</strong>
        </p>
        <div className={styles.boxButtons}>
          <SocialButton
            nameButton="Instagram"
            icon="instagram"
            link="#"
          />
           <SocialButton
            nameButton="Facebook"
            icon="facebook"
            link="#"
          />
          <SocialButton
            nameButton="Tiktok"
            icon="tiktok"
            link="#"
          />
          <SocialButton
            nameButton="Youtube"
            icon="youtube"
            link="#"
          />
          <SocialButton
            nameButton="Whatsapp"
            icon="whatsapp"
            link="#"
          />
          <SocialButton
            nameButton="Blog"
            icon="blogger"
            link="#"
          />
          <SocialButton
            nameButton="Threads"
            icon="threads"
            link="#"
          />
        </div>
      </div>
    </main>
  );
}
