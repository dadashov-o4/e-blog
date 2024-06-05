import React from 'react'
import ArticlesSection from '../components/ArticlesSection'
import Inspiring from '../components/Inspiring'
import Contact from './Contact'
import Shirketler from '../components/Shirketler'


const Home = () => {
  return (
    <>
    <div>Home page</div>
    <Inspiring/>
      <ArticlesSection/>
      <Contact/>
      <Shirketler/>
    </>
  )
}

export default Home