import React from 'react'
import "../StartPage.css"

function StartPage({toggle}) {

  return (
 <React.Fragment>
 <div className='wrapper'>
 <div className='image-div'>
 <img src="/images/dices 1.png"/>
 </div>
 <div className='text-div'>
 <h1> DICE GAME</h1>
 <button onClick={toggle}>Play Now</button>
 </div>
 </div>
 </React.Fragment>
  )
}

export default StartPage