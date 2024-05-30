import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import NotFound from './containers/404NotFound'
import Blog from './containers/Blog'
import WhatWeDo from './containers/WhatWeDo'
import Contact from './containers/Contact'
import Career from './containers/Career'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='container'>


    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/whatwedo' element={<WhatWeDo />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/contact' element={<Contact />}></Route>




        </Routes>
      
      </BrowserRouter>
      </div>
  )
}

export default App
