import React from 'react'
import { createCanvas, loadImage } from "canvas"
import { useEffect } from 'react';


function Canvas({drawSignatureValue,textSignatureValue}) {

    

    useEffect(()=>{
        const img = new Image();
        img.src = drawSignatureValue;
        console.log('useEffect..',img)
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.font = "30px serif";
        ctx.stroke();
    ( drawSignatureValue)? ctx.drawImage(img, 0, 0):  ctx.fillText(textSignatureValue,  20, 60)
    // ctx.drawImage(img,20,60);
    },[drawSignatureValue]) 
    
  return (
    <canvas className='canvas' id="myCanvas"/>

  )
}

export default Canvas