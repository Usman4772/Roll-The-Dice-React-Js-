import React, { useState,useRef } from 'react'
import "../Mainpage.css"
import Rules from './Rules'
function Mainpage() {
  const [image,setImage]=useState(1)
  const [selectedNumber,setSelectedNumber]=useState()
  const [score,setScore]=useState(0)
  const [rulesDisplay,setRulesDisplay]=useState({
    show:false,
    text:"Show"
  })

const boxValues=[1,2,3,4,5,6]
function generateRandomNumber(){
  return Math.floor(Math.random()*6)+1
}
function handleDiceRoll(){
  if(selectedNumber==null) return
const rn=generateRandomNumber()

setImage(rn)
if(rn===selectedNumber){
  setScore(prev=>prev+selectedNumber)
  setSelectedNumber(null)
}else{
  setScore(prev=> prev-2)
  setSelectedNumber(null)
}
}

function resetScore(){
  setScore(0)
  setSelectedNumber(null)
}
function toggleRules(){
  setRulesDisplay((prev)=>{
const newShowValue=!prev.show
const newText=newShowValue?"Hide":"Show"
return{
  show:newShowValue,
  text:newText
}

    
    
  })
}
  return (
<React.Fragment>
<div className='wrapper'>
<div className='score-div flex '>
<div className='total-score'>
<span>{score}</span>
<h2>Total Score</h2>
</div>
<div className='number-selection'>
<div className='boxes flex'>
{boxValues.map((value,i)=>{
  return <div className='box flex' style={{backgroundColor:value===selectedNumber?"black":"transparent",color:value===selectedNumber?"white":"black"}} isSelected={value===selectedNumber} key={i} onClick={()=>setSelectedNumber(value)}>{value}</div>

})}

</div>
<h2>Select  Number</h2>
</div>
</div>
<div className='dice-card flex'>
<div className='img' >
<img src={`/images/dice_${image}.png` } onClick={handleDiceRoll}/>
</div>
<h3>Click on dice to roll</h3>
<div className='buttons flex'>
<button onClick={resetScore}>Reset Score</button>
<button onClick={toggleRules}>{rulesDisplay.text} Rules</button>
{rulesDisplay.show?<Rules></Rules>:null}


</div>
</div>
</div>
</React.Fragment>
  )
}

export default Mainpage