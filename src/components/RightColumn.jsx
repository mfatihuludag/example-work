import React, { useState, useEffect, useRef } from 'react'
import Timer from './Timer'

const CurrencyRate = () => {
    const [rate, setRate] =useState (null)
    const [loading, setLoading] =useState (true)
  useEffect(() => {
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setRate(data.rates.TRY)
      setLoading(false)
    })
}, [])
if (loading) return <p>Kur yükleniyor...</p>

return (
  <p>1 USD = {rate} TL</p>)
}
const Rightcolumn = () => {
 const [newComment, setnewComment] = useState("")
 const [comments, setComments] = useState([
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!"
 ])
 const inputRef = useRef(null)
function yorumEkle() {
   setComments([ newComment, ...comments])
   setnewComment("")
 }
useEffect(() => {                      
    inputRef.current.focus()
 }, []) 
    return (
    <div className='right-column'>
      
<CurrencyRate />
<h3>Yorumlar ({comments.length})</h3>
<ul>
        {comments.map((eleman, index) =>(<li key={index}>{eleman}</li>) )}
        </ul>
      <input ref={inputRef} value={newComment} onChange={(e) => setnewComment(e.target.value)}/> 
      

<button onClick={yorumEkle}>Yorum Ekle</button>
<Timer/>

    </div>
  )
}

export default Rightcolumn
