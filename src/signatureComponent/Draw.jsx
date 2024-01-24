import React ,{useEffect, useRef, useState} from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';


function Draw({setSignature,color,mouseEdited,setmouseEdited,canvasref,setCanvasPath,CanvasPath}) {

  const [inPath,setInPath] = useState([])
  const pathObject = {"drawMode":true,"paths":[],"strokeColor":"blue","strokeWidth":4}
  let pathArray = [];

  const clearCanvas = ()=>{
    canvasref.current.clearCanvas();
    setmouseEdited(true)  
    setCanvasPath([])
    setInPath([])
  }

  const mouseDownHandler=()=>{
    setmouseEdited(false)  
  }
 
  const updateCanvasPath=(path)=>{
    setCanvasPath(prevArray => [...prevArray, path]);
   CanvasPath.map((item)=> item.strokeColor = color)
  }




  return (
    <div className='draw-section'>
    <div className='draw-container' onMouseDown={()=> mouseDownHandler()  }>
         <ReactSketchCanvas className='ReactSketchCanvas'
            ref={canvasref}
            strokeWidth={4}
            strokeColor={color || "black"} 
            onStroke={(path)=> updateCanvasPath(path)}
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