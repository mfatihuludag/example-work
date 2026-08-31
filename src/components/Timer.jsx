import React, { useEffect, useState } from 'react'

const Timer = () => {
  
        const[saniye, setSaniye]= useState(0)
        useEffect(()=>{
            const id =setInterval(()=> {
                setSaniye(prev=> prev+1)
            },1000)
            return()=>{
                clearInterval(id)
                console.log("Time is stop, is clear")
            }
        }, [])
         return (
    <div>
      <p>Sayfada geçen süre: {saniye} saniye</p>
    </div>)
     
 
  
}

export default Timer
