import React from 'react'

const Article = ({ meqaleninBasligi, meqaleninMetni, meqaleninSekli }) => {

  return (
    <>
      <div className="card border-0">
        <img src={meqaleninSekli} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{meqaleninBasligi} </h5>
          <p className="card-text">{meqaleninMetni = 'Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened.....'}</p>
          <div>
            <img src="/assets/images/favicon.svg" alt="" />
            <span className='mx-1'>Pecode Team</span>
            <span id='tarix'>16.05.2024</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article