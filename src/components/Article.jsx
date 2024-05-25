import React from 'react'

const Article = ({meqaleninBasligi,meqaleninMetni,meqaleninSekli}) => {

    return (
   <>
   <div class="card border-0">
   <img src={meqaleninSekli}className="card-img-top" alt="..." />
   <div className="card-body">
     <h5 className="card-title">{meqaleninBasligi} </h5>
     <p className="card-text">{meqaleninMetni='Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened.....'}</p>
     <p>
       <img className='' src="/assets/images/favicon.svg" alt="" />
       <span className='ms-3'>Pecode Team</span>
       <span id='tarix'>16.05.2024</span>
     </p>
   </div>
 </div>
 </>
  )
}

export default Article