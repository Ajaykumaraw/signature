import React, { useState } from 'react'
import  "../App.css"
import Draw from './Draw';
import TextSignature from './TextSignature';




function Dialog({setOpen,activeComponent,setActiveComponent,setSignature,Signature}) {

  const [color,setColor] = useState()
  console.log(color);
  const donebtn = ()=>{
    setOpen(false)
  }

  const cancelbtn=()=>{
    setSignature("")
    setOpen(false)
  }

  const setSignColor = (e)=>{
    e.preventDefault();
    setColor(e.target.value)
  }
  

  return (
    <div className='sign-dialog'>   
        <div className='sign-dialog-container'>
            <div className='sign-dialog-header'>
                <div className='sign-dialog-lable'><label>Add signature</label></div>
                <div className='sign-tab-container'>
                  <div className='sign-tab-btn-container'>
                    <button className={(activeComponent=="Draw")?"active-tab":"sign-tab-btn"}  onClick={()=> setActiveComponent("Draw")}>Draw</button>
                    <button className={(activeComponent=="Text")?"active-tab":"sign-tab-btn"} onClick={()=> setActiveComponent("Text")}>Type</button>
                  </div>
                </div>
            </div>
            <div className='sign-dialog-content'>
                <div className='select-color' onChange={(e)=>{setSignColor(e)}}>
                  <div className='color-btns'>
                      <input type='radio' width={"10px"} name="color-btn" value="black" style={{color:"black"}} defaultChecked />
                      <input type='radio' width={"10px"} name="color-btn"  value="#2b1cc1" style={{background:"lightblue"}}/>
                      <input type='radio' width={"10px"} name="color-btn"  value="blue"  style={{background:"blue"}}/>
                  </div>
                </div>
                {(activeComponent === "Draw" )? <Draw Signature={Signature} 
                color={color}
                setSignature={setSignature} /> 
                : <TextSignature setSignature={setSignature} color={color}/>}
            </div>
            <div className='sign-dialog-footer'>
               <div className='sign-dialog-footer-btn'>
                    <button className='sign-tab-btn-footer' onClick={()=> cancelbtn()}>Cancel</button>
                    <button className='sign-tab-btn-footer'  onClick={()=>donebtn()}>Done</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Dialog

