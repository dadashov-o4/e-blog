import React from 'react'
import Article from './Article'
import './Article.css'

const ArtilesSection = () => {
  return (
    <>
    <div className='latest row articleSection'>
    <div className="col-12 col-md-6">
     <Article meqaleninBasligi='Meqale1' meqaleninMetni='Metn1' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715873926/ae3ca22b25f568f36e643d33390ffcb1_n5j1qm.jpg'/>
    </div>
    <div className="col-12 col-md-6">
      <Article meqaleninBasligi='Meqale2' meqaleninMetni='Metn2' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715874130/f8d17f1b085a5fe275e1ebadd2226b67_uw2ji6.png'/>
    </div>
  </div>
  <div className="articles row">
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article/>
    </div>
  </div>
  </>
  )
}

export default ArtilesSection