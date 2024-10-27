import React, { useContext, useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import ProductCard from './Components/Product/ProductCard'
import Routing from './Router.jsx'
import {DataContext} from './Components/DataProvider/DataProvider.jsx'
import {Type} from './Utility/action.type.js'
import {auth} from './Utility/firebase.js'




function App() {
  const [count, setCount] = useState(0)
  const [{user}, dispatch]= useContext(DataContext)


  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        // console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return(

  <Routing/>
  
    // <div>
    //   <Header/>
    //   <Carousel/>
    //   <Category/>
    //   <Product/>
    //   <ProductCard/>
    //   </div>
    // </>
  )
}

export default App
