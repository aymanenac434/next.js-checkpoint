import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>Showcasing my skills and projects</p>
        <Image src="/images/profile.jpg" alt="Profile Picture" width={200} height={200} />
      </main>
    </div>
  )
}
