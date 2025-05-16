
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./page/Home";
import Admin from "./page/Admin";
import Basket from "./page/Basket";
import Nopage from "./page/Nopage";
import AddProduct from "./page/AddProduct";
function App() {


  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="basket" element={<Basket />} />
        <Route path="Addproduct" element={<AddProduct />} />
        <Route path="*" element={<Nopage />} />

      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )

}

export default App
