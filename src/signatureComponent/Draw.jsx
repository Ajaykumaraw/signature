import React ,{useEffect, useRef, useState} from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';


function Draw({setSignature,Signature,color}) {
  const canvasref = useRef();
  const [isDrawn,setIsDrawn] = useState(false)
  const [onStroke,setonStroke] = useState(false);
  let initialValue;
  let ctx,canvasElement;


  const clearCanvas = ()=>{
    canvasref.current.clearCanvas();
    setIsDrawn(false)
  }
 
  return (
    <div className='draw-section'>
    <div className='draw-container'>
         <ReactSketchCanvas className='ReactSketchCanvas'
            ref={canvasref}
            strokeWidth={4}
            strokeColor={color || "black"}
            onclick={console.log('onclick')}
            onChange={()=>{ setonStroke(true)
             canvasref.current.exportImage("png")
            .then(data => {
              initialValue = data;
              setSignature(data)
              if(initialValue!=Signature){
                setIsDrawn(true)
              }

            })
            .catch(e => {
              console.log(e);
            })}
          }
          />
    </div> 
          <div className='sign-here-lable'><label onClick={()=>clearCanvas()} >Clear Signature</label></div>
    </div>
  )
}

export default Draw