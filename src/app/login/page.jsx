'use client'

import { signIn, useSession } from 'next-auth/client'
import styles from './loginPage.module.css'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const { data, status } = useSession()
  console.log(data, status)

  const router = useRouter()

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === 'authenticated') {
    router.push('/')
  }

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
