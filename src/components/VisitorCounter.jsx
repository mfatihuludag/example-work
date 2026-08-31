import React, { useState, useEffect } from 'react'


const VisitorCounter  = () => {
    const [count, setCount] = useState (551)
   useEffect(() => {
    console.log("sayfa açıldı")
    setCount(prev => prev + 1)
}, [])
  return (
    <div className='visiter'>
        <p>Ziyaretçi Sayacı</p>
        <p>{count}</p>
     <button onClick={()=> setCount(count+1)
     } >Plus</button> 
    </div>
  )
}

export default VisitorCounter
