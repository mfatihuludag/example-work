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
 const [newRating, setNewRating] = useState(1)
 const [comments, setComments] = useState([
{text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!", rating: 5 },
  { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!", rating: 3 },
  { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quibusdam!", rating: 4 }
 ])
 const inputRef = useRef(null)
function yorumEkle() {
   setComments([{text: newComment, rating: newRating}, ...comments])
   setnewComment("")
   setNewRating(1)
 }
useEffect(() => {                      
    inputRef.current.focus()
 }, []) 
    return (
    <div className='right-column'>
      
<CurrencyRate />
<h3>Yorumlar ({comments.length})</h3>
<ul>
        {comments.map((eleman, index) =>(<li key={index}>{eleman.text} — ⭐{eleman.rating}</li>) )}
        </ul>
      <input ref={inputRef} value={newComment} onChange={(e) => setnewComment(e.target.value)}/> 
      <input type="number"
      min="1"
      max="5"
      value={newRating}
      onChange={(e) => setNewRating(Number(e.target.value))} />

<button onClick={yorumEkle}>Yorum Ekle</button>
<Timer/>

    </div>
  )
}

export default Rightcolumn
