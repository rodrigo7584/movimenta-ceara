'use client'
import Link from 'next/link'
import Image from 'next/image';

import styles from "../app/page.module.css";

interface SocialButtonProps{
  icon: string;
  link: string;
  nameButton: string;
}

const SocialButton = ({ nameButton, icon, link }: SocialButtonProps) => {
  return (
    <Link className={styles.socialButton} href={link} target="_blank">
      <div className={styles.iconButtonCircle}>
       <Image 
          className={styles.iconButton}
          src={`/${icon}.svg`}
          width={10}
          height={10}
          alt={`icon ${icon}`}
       />
       </div>
       <p className={styles.nameButton}>{nameButton}</p>
    </Link>
  )
}
export default SocialButton
