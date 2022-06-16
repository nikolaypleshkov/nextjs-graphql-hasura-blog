import type { NextPage } from 'next'
import BannerSection from '../sections/banner-section'
import TopBlogs from '../sections/top-blogs-section'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import { Query } from 'react-apollo';
import { withApollo } from 'react-apollo';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <BannerSection />
      <TopBlogs />
    </div>
  )
}

export default Home
