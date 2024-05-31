import React from 'react'
import ArticlesSection from '../components/ArticlesSection'
import Inspiring from '../components/Inspiring'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div>Home page</div>
    <Inspiring/>
      <ArticlesSection/>
      <Contact/>
    </>
  )
}

export default Home