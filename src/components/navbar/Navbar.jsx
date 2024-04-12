import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} />
        <Image src="/github.png" width={24} height={24} />
        <Image src="/youtube.png" width={24} height={24} />
      </div>
      <div className={styles.logo}>blogx</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  )
}

export default Navbar
