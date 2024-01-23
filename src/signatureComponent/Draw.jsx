import React ,{useEffect, useRef, useState} from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';


function Draw({setSignature,color,mouseEdited,setmouseEdited,canvasref,setCanvasPath,CanvasPath}) {

  

  const clearCanvas = ()=>{
    canvasref.current.clearCanvas();
    setmouseEdited(true)  
  }

  const mouseDownHandler=()=>{
    setmouseEdited(false)  
  }
 
  const updateCanvasPath=(path)=>{
    console.log("Paths",path.paths)
   // const pathArray = [...CanvasPath.paths];
    
    // const completePath = [[CanvasPath.paths],[...path.paths]];
    // console.log(completePath)
    console.log(path.paths)
    setCanvasPath(path.paths)
   // setCanvasPath(CanvasPath=> [...CanvasPath.paths,[...path.paths]] );
  }



  return (
    <div className='draw-section'>
    <div className='draw-container' onMouseDown={()=> mouseDownHandler()  }>
         <ReactSketchCanvas className='ReactSketchCanvas'
            ref={canvasref}
            strokeWidth={4}
            strokeColor={color || "black"}
            onStroke={(path)=> updateCanvasPath(path)}
           // onStroke={(path)=> console.log(path)}
            onChange={()=>{ 
             canvasref.current.exportImage("png")
            .then(data => {
              setSignature(data)
            })
            .catch(e => {
              console.log(e);
            })}
          }
          />
    </div> 
          <div className='sign-here-lable'>
          {mouseEdited? <label onClick={()=>clearCanvas()} >Sign here</label>:
             <label onClick={()=>clearCanvas()} >Clear Signature</label>}
            </div>
    </div>
  )
}

export default Draw