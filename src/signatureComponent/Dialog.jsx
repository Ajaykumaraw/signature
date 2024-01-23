import React, { useEffect, useState,useRef } from 'react'
import  "../App.css"
import Draw from './Draw';
import TextSignature from './TextSignature';




function Dialog({setOpen,activeComponent,setActiveComponent,setSignature,Signature}) {
  const canvasref = useRef();
  const [color,setColor] = useState("black")
  const [ts,setTs] = useState("Signature");
  const [textEdited,settextEdited] = useState(true)
  const [mouseEdited,setmouseEdited] = useState(true)
  const [CanvasPath,setCanvasPath] = useState()
 

  const donebtn = ()=>{
    setOpen(false)
  }

  const cancelbtn=()=>{
    setSignature("")
    setOpen(false)
  }

  const setSignColor = (selectedColor)=>{
    setColor(selectedColor)
    if(activeComponent === "Draw"){
      canvasref.current.clearCanvas();
      CanvasPath.strokeColor = selectedColor;
      canvasref.current.loadPaths(CanvasPath)
      // setmouseEdited(true)  
    }
   

  }
  

  return (
    <div className='sign-dialog'>   
        <div className='sign-dialog-container'>
            <div className='sign-dialog-header'>
                <div className='sign-dialog-lable'><label>Add signature</label></div>
                <div className='sign-tab-container'>
                  <div className='sign-tab-btn-container'>
                    <button className={(activeComponent==="Draw")?"active-tab":"sign-tab-btn"}  onClick={()=> setActiveComponent("Draw")}>Draw</button>
                    <button className={(activeComponent==="Text")?"active-tab":"sign-tab-btn"} onClick={()=> setActiveComponent("Text")}>Type</button>
                  </div>
                </div>
            </div>
            <div className='sign-dialog-content'>
                <div className='select-color' >
                  <div className='color-btns' onChange={(e)=>{setSignColor(e)}}>
                    <button  className={`radio-btn-black ${(color=="black")?"active-btn":""}`} onClick={()=>{ setSignColor("black")}}></button>
                    <button  className={`radio-btn-blue ${(color=="rgb(34, 147, 251)")?"active-btn":""}`} onClick={()=>{setSignColor("rgb(34, 147, 251)")}}></button>
                    <button  className={`radio-btn-pink ${(color=="rgb(70, 54, 227)")?"active-btn":""}`} onClick={()=>{setSignColor("rgb(70, 54, 227)")}}></button>
                  </div>
                </div>
                {(activeComponent === "Draw" )? <Draw Signature={Signature} 
                color={color}
                setmouseEdited={setmouseEdited}
                mouseEdited={mouseEdited}
                setSignature={setSignature} 
                canvasref={canvasref}
                setCanvasPath={setCanvasPath}
                CanvasPath={CanvasPath}
                /> 
                : <TextSignature setSignature={setSignature} color={color}
                setTs={setTs} ts={ts} settextEdited={settextEdited}
                />}
            </div>
            <div className='sign-dialog-footer'>
               <div className='sign-dialog-footer-btn'>
                    <button className='sign-tab-btn-footer' onClick={()=> cancelbtn()}>Cancel</button>
                    {(activeComponent === "Draw")?<button disabled={mouseEdited} className={`${mouseEdited?"sign-tab-btn-footer-disabled" :"sign-tab-btn-footer"}`}
                      style={{background:"#4636e3",color:'white'}} onClick={()=>donebtn()}>Done</button>:
                    <button disabled={textEdited}  className={`${textEdited?"sign-tab-btn-footer-disabled" :"sign-tab-btn-footer"}`}
                      style={{background:"#4636e3",color:'white'}} onClick={()=>donebtn()}>Done</button>}
               </div>
            </div>
        </div>
    </div>
  )
}

export default Dialog
// className={`${edited?"sign-tab-btn-footer":"sign-tab-btn-footer-disabled"}`}
