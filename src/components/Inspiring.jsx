import React from 'react'
import './Inspiring.css'
import { ReactTyped } from "react-typed";

const Inspiring = () => {
  return (
    <>
    <section className='inspiring mt-5 '>
        <div className='inspiring-div'>
    <ReactTyped  className='text-light d-flex justify-content-center  display-6 fw-bold'
      strings={[
        "Inspiring to dream. Creating the devised ",
        "You can't reach your goal without dreaming ",
        "The hardest part is getting started",
       
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
      
    </ReactTyped>
    <ReactTyped  className='text-light d-flex justify-content-center h5 fw-bold'
      strings={[
        "Dicover the newest articles and case studies from Pecode team",
       
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
      
    </ReactTyped>
            
            <img className='yarimdaire' src="/assets/images/inspiring/yarimdaire.svg" alt="yarimdaire" />
            <img className='daire' src="/assets/images/inspiring/daire.svg" alt="daire" />
            <img className='yashilHalqa' src="/assets/images/inspiring/yashilHalqa.svg" alt="yashilHalqa" />
            <img className='yarimHalqa' src="/assets/images/inspiring/yarimHalqa.svg" alt="yarimHalqa" />
            <img className='sariHalqa' src="/assets/images/inspiring/sariHalqa.svg" alt="sariHalqa" />
            <img className='sektor' src="/assets/images/inspiring/sektor.svg" alt="sektor" />
        </div>
    </section>

    
    </>
  )
}

export default Inspiring