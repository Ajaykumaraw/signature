import React, { useState } from 'react'
import "../App.css"
import Dialog from './Dialog'




function Signature() {
    const [open, setOpen] = useState(false)
    const [activeComponent, setActiveComponent] = useState("Draw") 
    const [Signature,setSignature] = useState("")
  
  return (
    <div className='sign-container'>
        <div className='sign-area'>
            <div className='sign-button'><button onClick={()=> setOpen(true)}>sign</button></div>
           {(open)?"":<img draggable="true" className='signImage' src={Signature} />} 
        </div>
        {(open)? <Dialog setOpen={setOpen} 
             activeComponent={activeComponent}
             setActiveComponent={setActiveComponent}
             setSignature={setSignature}
             Signature={Signature}
             />:<div/>}
       
    </div>
  )
}

export default Signature
