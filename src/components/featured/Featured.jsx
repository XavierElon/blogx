import React from 'react'
import Image from 'next/image'
import styles from './featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Red Head Girl</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Achilles & Flocka</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
