import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuCategories.module.css'
import MenuPosts from '../menuPosts/menuPosts'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
        Travel
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
        Style
      </Link>
      <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
        Food
      </Link>
      <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
        Culture
      </Link>
      <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories
