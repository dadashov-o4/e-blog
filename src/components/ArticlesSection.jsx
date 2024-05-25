import React from 'react'
import Article from './Article'
import './Article.css'

const ArtilesSection = () => {
  return (
    <>
    <div className='latest row articleSection'>
    <div className="col-12 col-md-6">
     <Article  meqaleninBasligi='The truth about ReactJS' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715873926/ae3ca22b25f568f36e643d33390ffcb1_n5j1qm.jpg'/>
    </div>
    <div className="col-12 col-md-6">
      <Article  meqaleninBasligi='How to solve an unsolvable
conflict ' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715874130/f8d17f1b085a5fe275e1ebadd2226b67_uw2ji6.png'/>
    </div>
  </div>
  <div className="articles row">
    <div className="col-12 col-md-6 col-lg-4">
      <Article  meqaleninBasligi='The truth about ReactJS'  meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715885958/d320fef8feec9ba2f8800b579f9973fd_skw92v.png'/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article  meqaleninBasligi='Gaffer. Case Study'  meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715885986/4b58e77e91aaa725222faf809b6e937d_fjditw.png'/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article  meqaleninBasligi='How to solve an unsolvable
conflict '  meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715886009/29f12982c0eb1ac230ea07e417b953aa_nu5zys.png'/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article  meqaleninBasligi='The truth about ReactJS'  meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715886045/f6edd76761d353bf284ea5a9b001afb6_waf8ps.png'/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article  meqaleninBasligi='Gaffer. Case Study'  meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715886062/2d1686d2b8a2a6f8984e1ced659e628c_knbt0s.png'/>
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <Article meqaleninBasligi='How to solve an unsolvable
conflict '   meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715886077/1d34c2ad4cc922bacf1bd5fc9ee42208_kspawp.png'/>
    </div>
  </div>
  </>
  )
}

export default ArtilesSection