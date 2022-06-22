import React from 'react'
import BannerSection from '../../sections/banner-section'
import TopBlogs from '../../sections/top-blogs-section'
import styles from '../../../../styles/Home.module.css'
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App - Home</title>
      </Head>
      <BannerSection />
      <TopBlogs />
    </div>
  )
}

export default HomePage