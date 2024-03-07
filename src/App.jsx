import React, { useState } from 'react'
import StartPage from './components/StartPage'
import Mainpage from './components/Mainpage'

function App() {
  const [currentPage,setCurrentPage]=useState(true)

  function setPage(){
    setCurrentPage(prev=>!prev)
  }
  return (

    
  <React.Fragment>
  {currentPage?<Mainpage></Mainpage>:<StartPage toggle={setPage}></StartPage>}
  
  </React.Fragment>

  )
}

export default App