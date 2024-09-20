import { useState } from 'react'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import ProductCard from './Components/Product/ProductCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      <Carousel/>
      <Category/>
      <Product/>
      <ProductCard/>
      </div>
    </>
  )
}

export default App
