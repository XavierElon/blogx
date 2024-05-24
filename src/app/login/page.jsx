'use client'

import { signIn, useSession } from 'next-auth/client'
import styles from './loginPage.module.css'

const LoginPage = () => {
  const { data, status } = useSession()
  console.log(data, status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          Sign in With Google
        </div>
        <div className={styles.socialButton}>Sign in With Github</div>
        <div className={styles.socialButton}>Sign in With Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
