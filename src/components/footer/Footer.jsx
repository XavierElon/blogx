import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="alpha brogrammer logo" width={50} height={50} />
          <h1 className={styles.logoText}>AlPhA BrOGraMMeR</h1>
        </div>
        <p className={styles.description}>A blog about programming and technology.</p>
      </div>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="facebook icon" width={30} height={30} />
        <Image src="/instagram.png" alt="instagram icon" width={30} height={30} />
        <Image src="/tiktok.png" alt="tiktok icon" width={30} height={30} />
        <Image src="/youtube.png" alt="youtube icon" width={30} height={30} />
      </div>
      <div className={styles.link}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.listItem}>
            Home
          </Link>
          <Link href="/" className={styles.listItem}>
            Blog
          </Link>
          <Link href="/" className={styles.listItem}>
            About
          </Link>
          <Link href="/" className={styles.listItem}>
            Contact
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.listItem}>
            Coding
          </Link>
          <Link href="/" className={styles.listItem}>
            Style
          </Link>
          <Link href="/" className={styles.listItem}>
            Travel
          </Link>
          <Link href="/" className={styles.listItem}>
            Fashion
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" className={styles.listItem}>
            Facebook
          </Link>
          <Link href="/" className={styles.listItem}>
            Instagram
          </Link>
          <Link href="/" className={styles.listItem}>
            Tiktok
          </Link>
          <Link href="/" className={styles.listItem}>
            Youtube
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
