import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
  const status = 'authenticated'

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Post</button>
        </div>
      ) : (
        <Link href="/login">Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.name}>John Doe</span>
              <span className={styles.date}>01/01/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Enim occaecat amet qui officia consequat commodo Lorem enim qui velit anim pariatur officia laboris. Irure
            ea voluptate amet nostrud nisi quis veniam consectetur labore nostrud amet aute. Laboris tempor pariatur
            dolor et pariatur velit laboris occaecat. Dolor in dolor do magna labore reprehenderit veniam duis excepteur
            amet. Culpa deserunt do in Lorem adipisicing velit et dolor ad. Enim minim incididunt duis consequat ex
            excepteur ex et. Sunt irure ex consectetur anim consequat labore ut enim esse do.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.name}>John Doe</span>
              <span className={styles.date}>01/01/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Enim occaecat amet qui officia consequat commodo Lorem enim qui velit anim pariatur officia laboris. Irure
            ea voluptate amet nostrud nisi quis veniam consectetur labore nostrud amet aute. Laboris tempor pariatur
            dolor et pariatur velit laboris occaecat. Dolor in dolor do magna labore reprehenderit veniam duis excepteur
            amet. Culpa deserunt do in Lorem adipisicing velit et dolor ad. Enim minim incididunt duis consequat ex
            excepteur ex et. Sunt irure ex consectetur anim consequat labore ut enim esse do.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.name}>John Doe</span>
              <span className={styles.date}>01/01/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Enim occaecat amet qui officia consequat commodo Lorem enim qui velit anim pariatur officia laboris. Irure
            ea voluptate amet nostrud nisi quis veniam consectetur labore nostrud amet aute. Laboris tempor pariatur
            dolor et pariatur velit laboris occaecat. Dolor in dolor do magna labore reprehenderit veniam duis excepteur
            amet. Culpa deserunt do in Lorem adipisicing velit et dolor ad. Enim minim incididunt duis consequat ex
            excepteur ex et. Sunt irure ex consectetur anim consequat labore ut enim esse do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
