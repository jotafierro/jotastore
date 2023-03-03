import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '@/components/Navbar/Navbar'

import ProductList from "@/routes/ProductList/ProductList";
import ProductDetail from '@/routes/ProductDetail/ProductDetail';
import Page404 from "./routes/Page404/Page404";

import './App.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="app">
      <Routes>
        <Route exact path='/jotastore/' element={<ProductList />} />
        <Route exact path='/jotastore/category/:category' element={<ProductList />} />
        <Route exact path='/jotastore/product/:productId' element={<ProductDetail />} />
        <Route path='*' element={<Page404 />}  />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
