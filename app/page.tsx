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
            link="https://www.instagram.com/movimento.ceara?igsh=ZmN3bzZ0c3ZsZnE3"
          />
           <SocialButton
            nameButton="Facebook"
            icon="facebook"
            link="https://www.facebook.com/MOVIMENTO.CEARA?mibextid=LQQJ4d"
          />
          <SocialButton
            nameButton="Tiktok"
            icon="tiktok"
            link="http://www.tiktok.com/@movimentocearaa"
          />
          <SocialButton
            nameButton="Youtube"
            icon="youtube"
            link="https://www.youtube.com/@movimentoceara2006"
          />
          <SocialButton
            nameButton="Whatsapp"
            icon="whatsapp"
            link="http://wa.me//5588981134536"
          />
          <SocialButton
            nameButton="Blog"
            icon="blogger"
            link="https://movimentoceara.blogspot.com/"
          />
          <SocialButton
            nameButton="Threads"
            icon="threads"
            link="https://www.threads.net/@movimento.ceara "
          />
        </div>
      </div>
    </main>
  );
}
