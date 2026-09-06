import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'


const ProductColumn = ({sepetSayisi, setSepetSayisi, favoriSayisi, setFavoriSayisi}) => {
 
const [arama, setArama] = useState('')
const [maxFiyat, setMaxFiyat] = useState('')
const [siralama, setSiralama] = useState('none')
const [loading, setLoading] = useState(true)
const [products, setProducts] = useState ([])



 useEffect(() => {
    console.log(`Filtre değişti: arama="${arama}", maxFiyat=${maxFiyat}`)
  }, [arama, maxFiyat])
  useEffect(() => {
  fetch('https://fakestoreapi.com/products?limit=20')
    .then(res => res.json())
    .then(data => {
        console.log(data)
      setProducts(data)
      setLoading(false)
    })
    

}, [])

const filtrelenmisUrunler = products.filter(product => 
  product.title.toLowerCase().includes(arama.toLowerCase()) &&
  (maxFiyat === '' || product.price <= Number(maxFiyat)))
  const sirali = [...filtrelenmisUrunler].sort((a, b) => {
  if (siralama === 'asc') return a.price - b.price
  if (siralama === 'desc') return b.price - a.price
  return 0
})
  return (
     <div>
        <div className='header-bar'>
  <h1>exampleshop.com</h1>
  <div className='header-actions'>
    <button>👤 Giriş Yap</button>
    <button>🤍 Favorilerim ({favoriSayisi})</button>
    <button>🛒 Sepetim ({sepetSayisi}) </button>
  </div>
</div>
        <div className="filter-bar">
             <input
        type="text"
        placeholder="Ürün ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      />
      <input
        type="number"
        placeholder="Fiyat"
        value={maxFiyat}
        onChange={(e) => setMaxFiyat(e.target.value)}
      />
      <select value={siralama} onChange={(e) => setSiralama(e.target.value)}>
    <option value="none">Sıralama yok</option>
    <option value="asc">Fiyat: Düşükten Yükseğe</option>
    <option value="desc">Fiyat: Yüksekten Düşüğe</option>
      </select>
       </div>
        <div className='product1'>
      {sirali.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          fiyat={product.price}
          image={product.image}
          sepetSayisi={sepetSayisi}
          setSepetSayisi={setSepetSayisi}
          favoriSayisi={favoriSayisi}
          setFavoriSayisi={setFavoriSayisi}
        />
      ))}

    </div>
    <h2>Bileklikler</h2>
   <BraceletColumn 
  sepetSayisi={sepetSayisi}
  setSepetSayisi={setSepetSayisi}
  favoriSayisi={favoriSayisi}
  setFavoriSayisi={setFavoriSayisi}
/>
    </div>
  )
}

const BraceletColumn = ({sepetSayisi, setSepetSayisi, favoriSayisi, setFavoriSayisi}) => {
  const [bileklikler, setBileklikler] = useState ([])
  const [loading, setLoading] = useState (true)

  useEffect (() => {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
    .then(res => res.json ())
    .then (data => {
      console.log(data)
      setBileklikler(data)
      setLoading(false)
    } )
  },[])
if (loading) return <p>Bileklikler Yükleniyor...</p>
return (
  <div className='product1'>
    {bileklikler.map((bileklik)=> (
      <ProductCard
      key={bileklik.id}
      title={bileklik.title}
      fiyat={bileklik.fiyat}
      image={bileklik.image}
      sepetSayisi={sepetSayisi}
          setSepetSayisi={setSepetSayisi}
          favoriSayisi={favoriSayisi}
          setFavoriSayisi={setFavoriSayisi}
      />
    ))}
  </div>
)

}

export default ProductColumn

