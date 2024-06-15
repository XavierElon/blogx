import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

const Card = ({ key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Tech</span>
        </div>
        <Link href="/">
          <h1>Michelle my Princess is the Best Creation in the World</h1>
        </Link>
        <p className={styles.desc}>Sint excepteur adipisicing eu sit esse id ad Lorem deserunt ea cillum tempor nisi. Ex ea ut commodo aliqua ipsum ex Lorem in cillum non id et aliqua. Proident consequat dolore nisi irure id deserunt excepteur aliqua nulla duis magna proident duis. Nisi aliqua anim ipsum tempor consequat deserunt aliquip ea labore est culpa non dolor aute.</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
