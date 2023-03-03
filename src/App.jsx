import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '@/components/Navbar/Navbar'

import ProductList from "@/routes/ProductList/ProductList";
import ProductDetail from '@/routes/ProductDetail/ProductDetail';

import './App.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="app">
      <Routes>
        <Route exact path='/jotastore/' element={<ProductList />} />
        <Route exact path='/jotastore/category/:category' element={<ProductList />} />
        <Route exact path='/jotastore/product/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
