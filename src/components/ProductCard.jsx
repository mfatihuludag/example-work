import React, { useState } from 'react'

const ProductCard = (props) => {
  const [isFavori, setIsFavori] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [detayGoster, setDetayGoster] = useState(false)
  return (
    <div className='product-card'>
     <img className="product-image" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <button onClick={() => setDetayGoster(!detayGoster)}>
  {detayGoster ? 'Gizle' : 'Detayları Göster'}
</button>
{detayGoster && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, minima.</p>}
      <p className="product-price">{props.fiyat} TL</p>
      <div className='button-group' >
        <button onClick={() => {
  setIsFavori(!isFavori)
  if (!isFavori) {
    props.setFavoriSayisi(props.favoriSayisi + 1)
  } else {
    props.setFavoriSayisi(props.favoriSayisi - 1)
  }
}}>
  {isFavori ? '❤️' : '🤍'}
</button>
      <button onClick={() => {
  setIsAdd(!isAdd)
  if (!isAdd) {
    props.setSepetSayisi(props.sepetSayisi + 1)
  } else {
    props.setSepetSayisi(props.sepetSayisi - 1)
  }
}}>
  {isAdd ? '🛒✔️' : '🛒'}
</button>
</div>
    </div>
  )
}

export default ProductCard
