import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Pages/Product';
import CreateProduct from './Components/Pages/CreateProduct';
import ProductList from './Components/Pages/ProductList';
import ProductDetails from './Components/Pages/ProductDetails';
import NotFound from './Components/NotFound';
import CryptoDetail from './Components/CryptoDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>

        <Route path='/cryptodetail/:cryptoSymbol/:id' element={<CryptoDetail/>}></Route>
        <Route path='/cryptodetail/:cryptoSymbol' element={<CryptoDetail/>}></Route>

        <Route path='/product'>
          <Route path='' element={<Product/>}></Route>
          <Route path='create' element={<CreateProduct/>}></Route>
          <Route path='list' element={<ProductList/>}></Route>
          <Route path='details' element={<ProductDetails/>}></Route>
          <Route path='details/:productId' element={<ProductDetails/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

