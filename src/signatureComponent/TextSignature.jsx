import React, { useState,useEffect, useRef } from 'react'

function TextSignature({setSignature,Signature,color}) {
  const [ts,setTs] = useState("Signature");
  const [font,setFont] = useState("Caveat");
  const textInput = useRef();
  const [textColor,seTextColor] = useState("black");
  const textSignatureRef = useRef(null);
  const textSignatureRef2 = useRef(null);
  const textSignatureRef3 = useRef(null);
  const textSignatureRef4 = useRef(null);

  let ctx,ctx2,ctx3,ctx4;
  let canvasElement,canvasElement2,canvasElement3,canvasElement4;

   console.log(color)

  useEffect(()=>{
     canvasElement = textSignatureRef.current;
     canvasElement2 = textSignatureRef2.current;
     canvasElement3 = textSignatureRef3.current;
     canvasElement4 = textSignatureRef4.current;
     ctx = canvasElement.getContext("2d");
     ctx2 = canvasElement2.getContext("2d");
     ctx3 = canvasElement3.getContext("2d");
     ctx4 = canvasElement4.getContext("2d");
     ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
     ctx2.clearRect(0, 0, canvasElement.width, canvasElement.height);
     ctx3.clearRect(0, 0, canvasElement.width, canvasElement.height);
     ctx4.clearRect(0, 0, canvasElement.width, canvasElement.height);
     ctx.moveTo(0, 0);
  
    ctx.font = "30px Caveat";
    ctx2.font = "30px Pacifico";
    ctx3.font = "30px Marck Script";
    ctx4.font = "30px Meddon";
    ctx.strokeStyle = color;
    ctx2.strokeStyle = color;
    ctx3.strokeStyle = color;
    ctx4.strokeStyle = color;
    ctx.fillText(ts, 10, 60)
    ctx2.fillText(ts, 10, 60)
    ctx3.fillText(ts, 10, 60)
    ctx4.fillText(ts, 10, 60)
    setSignature(canvasElement.toDataURL())
    setSignature(canvasElement2.toDataURL())
    setSignature(canvasElement3.toDataURL())
    setSignature(canvasElement4.toDataURL())
    console.log(canvasElement)
  })

  const clearSignature = ()=>{
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx2.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx3.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx4.clearRect(0, 0, canvasElement.width, canvasElement.height);
    textInput.current.value = "";
     ctx.fillText("Signature", 10, 60)
     ctx2.fillText("Signature", 10, 60)
     ctx3.fillText("Signature", 10, 60)
     ctx4.fillText("Signature", 10, 60)
  }
  
  const colorChange=(e)=>{
    e.preventDefault();
    setTs(e.target.value)
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx2.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx3.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx4.clearRect(0, 0, canvasElement.width, canvasElement.height);
   
  }
  
  
  return (
    <div className='text-signature'>
          <div className='text-signature-container'>
            <div className='text-signature-input'>
               <input className='text-signature-field' type='text' onChange={(e)=>  setTs(e.target.value)}
                style={{fontFamily:`${font}`,color:`${color}`}}  placeholder="Signature"  ref={textInput}/>
               <div className='clear-signature-lable' onClick={()=> clearSignature()}><label>Clear Signature</label></div>
            </div>
            <div className='selete-text-font' onChange={(e)=>{setFont(e.target.value)}}>
              <div className='textCanvas-fonts-container' >
                <input type='radio' width={"10px"} name="font-family" value="Caveat" defaultChecked/>
                <canvas  ref={textSignatureRef} id="myCanvas" width={300} height={100} /> 
              </div>
              <div className='textCanvas-fonts-container' >
                <input type='radio' width={"10px"} name="font-family" value="Pacifico"/>
                <canvas className='textCanvas-fonts' ref={textSignatureRef2} id="myCanvas" width={300} height={100} />
              </div>
              <div className='textCanvas-fonts-container'>
                <input type='radio' width={"10px"} name="font-family"  value="Marck Script"/>
                <canvas className='textCanvas-fonts' ref={textSignatureRef3} id="myCanvas" width={300} height={100} />
              </div>
              <div className='textCanvas-fonts-container'>
                <input type='radio' width={"10px"} name="font-family"  value="Meddon"/>
                <canvas className='textCanvas-fonts' ref={textSignatureRef4} id="myCanvas" width={300} height={100} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default TextSignature