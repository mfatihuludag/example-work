import React, { useState } from 'react'
const BegeniSayaci = () => {
    const [begeni, setBegeni] = useState(0)
    function arttir () {
        setBegeni (begeni+1)
    }
    function azalt () {
        if (begeni > 0) {
            setBegeni (begeni-1)
        }
    }
return(
    <div>
        <p>Begeni: {begeni}</p>
        <button onClick={arttir}>+</button>
        <button onClick={azalt}>-</button>
    </div>
)
} 
export default Like
