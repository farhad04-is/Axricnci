import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { dataProvider } from '../Context/DataContext'

export default function Carddd() {
  const { favorite, setfavorite,Mehsul } = useContext(dataProvider)
  const [data, setdata] = useState([])

  async function getAlldata() {
    let resp = await axios.get("http://localhost:3000")
    setdata(resp.data)
  }
  useEffect(() => {
    getAlldata()
  }, [])

  return (
    <>
      {
        data.map((x) => {
          return <ul key={x._id} >
            <li><img src={x.image} alt="" /></li>
            <li>{x.product}</li>
            <li>{x.price}</li>
            <li> <button onClick={() => Mehsul(x)} >basket</button></li>
          </ul>
        })
      }
    </>
  )
}
