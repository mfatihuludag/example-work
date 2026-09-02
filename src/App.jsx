import React, {useState} from 'react'
import './App.css'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import ProductColumn from './components/Product'




const App = () => {
   const [sepetSayisi, setSepetSayisi] = useState(0)
  const [favoriSayisi, setFavoriSayisi] = useState(0)

  return (
    <div className='page'>
     <LeftColumn/>
     <ProductColumn
   sepetSayisi={sepetSayisi}
   setSepetSayisi={setSepetSayisi}
   favoriSayisi={favoriSayisi}
   setFavoriSayisi={setFavoriSayisi}/>
     <RightColumn/>
    </div>
  )
}

export default App
