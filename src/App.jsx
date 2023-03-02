import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'

import Navbar from './components/Navbar/Navbar'

import ProductList from "./routes/ProductList";
import ProductDetail from './routes/ProductDetail';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="app">
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/category/:categoryId' element={<ProductList />} />
        <Route exact path='/product/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
