import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Michelle, my Princess is the Best Creation in the World</h1>
          <div className={styles.user}>
            {/* {data?.user?.image && ( */}
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Test</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        {/* )} */}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          {/* <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }} /> */}
          <div className={styles.comment}>{<Comments />}</div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
