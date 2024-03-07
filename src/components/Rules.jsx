import React from 'react'


function Rules() {
    const rules=["Select any number","Click on dice image","after click on dice if selected number is equal to dicce num you'll get same points as selected number","if you get wrong guess then 2 points will be deducted"]
  return (
    <React.Fragment>
    <div className='container'>
    <h1>HOW TO PLAY ?</h1>
    <div className='rules'>
    {rules.map((rule,i)=>{
        return <p key={i}>{rule}</p>
    })}
    </div>

    </div>
    </React.Fragment>
  )
}

export default Rules