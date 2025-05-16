import React, { useContext } from 'react'

import Carddd from '../Component/Carddd'
import { dataProvider } from '../Context/DataContext'

function Home() {
    const {favorite,setfavorite}=useContext(dataProvider)
return (
<>
<div>say:{favorite.length}</div>
<Carddd />
</>
  )
}

export default Home