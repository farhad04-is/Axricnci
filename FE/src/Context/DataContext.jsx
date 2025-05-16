import React, { createContext, useState } from 'react'


export const dataProvider=createContext()



function DataContext({children}) {
    const [favorite,setfavorite]=useState([])

function Mehsul(x) {
    if(favorite.filter((x)=>{x===x})){
        return ;
    }
    let obyekt = {
      image: x.image,
      product: x.product,
      price: x.price
    }
    setfavorite([...favorite, obyekt])
  }
  return (
   <dataProvider.Provider value={{
    favorite, setfavorite,Mehsul
}}>
    {children}
   </dataProvider.Provider>
  )
}

export default DataContext