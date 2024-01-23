import React, { useState,useEffect, useRef } from 'react'

function TextSignature({setSignature,Signature,color,setTs,ts,settextEdited}) {
  
  const [font,setFont] = useState("Caveat");
  const textInput = useRef();
  const textSignatureRef = useRef(null);
  const [lable,setLable]=useState("Signature")

  let ctx;
  let canvasElement;

  useEffect(()=>{
     canvasElement = textSignatureRef.current;
     ctx = canvasElement.getContext("2d");
     ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
     ctx.moveTo(0, 0);
     ctx.reset();
     ctx.font = `30px ${font}`;
     ctx.fillStyle = color;
     ctx.fillText(ts, 10, 60)
     setSignature(canvasElement.toDataURL())
  })

  const setFonts=(value)=>{
    setFont(value)
    textInput.current.style.color = color;
  }

  const clearSignature = ()=>{
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    setLable("Signature")
     textInput.current.value = "";
     textInput.current.style.color = color;
     settextEdited(true)
  
  }
  
  const setTss=(value)=>{
    setTs(value)
    setLable(value) 
    if(value.length === 0){
      settextEdited(true)
      setLable("Signature")
    }else{
      settextEdited(false)
    }

     
  }
  
  
  return (
    <div className='text-signature'>
          <div className='text-signature-container'>
            <div className='text-signature-input'>
               <input className='text-signature-field' type='text' onChange={(e)=>setTss(e.target.value)}
                style={{fontFamily:`${font}`,color:`${color}`}}  placeholder="Signature"  ref={textInput}/>
               <div className='clear-signature-lable' onClick={()=> clearSignature()}><label>Clear Signature</label></div>
               <canvas className='hideSignature' ref={textSignatureRef} id="myCanvas" width={300} height={100} /> 
            </div>
            <div className='selete-text-font' onChange={(e)=>setFonts(e.target.value)}>
              <div className='textCanvas-fonts-container' >
                <input type='radio' className='text-radio-btn' width={"10px"} name="font-family" value="Caveat" defaultChecked/>
                <label className='text-lable'  placeholder="Signature" style={{color:`${color}`,fontFamily:"Caveat"}}>{lable}</label>
              </div>
              <div className='textCanvas-fonts-container' >
                <input type='radio'  className='text-radio-btn' width={"10px"} name="font-family" value="Pacifico"/>
                <label className='text-lable' style={{color:`${color}`,fontFamily:"Pacifico"}}>{lable}</label>
              </div>
              <div className='textCanvas-fonts-container'>
                <input type='radio'  className='text-radio-btn' width={"10px"} name="font-family"  value="Marck Script"/>
                <label className='text-lable' style={{color:`${color}`,fontFamily:"Marck Script"}}>{lable}</label>
              </div>
              <div className='textCanvas-fonts-container'>
                <input type='radio'  className='text-radio-btn' width={"10px"} name="font-family"  value="Meddon"/>
                <label className='text-lable' style={{color:`${color}`,fontFamily:"Meddon"}}>{lable}</label>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TextSignature