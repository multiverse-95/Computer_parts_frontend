import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, Button, Carousel, Col, Container, Row} from 'react-bootstrap';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";
import {Routes, Route, Link, Router} from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import React from "react";

function App() {
  return (
      <div>
        <Header></Header>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/products/videocards" element={<ProductsPage />}/>
              <Route path="/products/processors" element={<ProductsPage />}/>
              <Route path="/products/memory" element={<ProductsPage />}/>
              <Route path="/products/motherboards" element={<ProductsPage />}/>
              <Route path="/products/coolers" element={<ProductsPage />}/>
              <Route path="/products/power" element={<ProductsPage />}/>
              <Route path="/products/box" element={<ProductsPage />}/>
          </Routes>
          <Footer></Footer>
      </div>

  );
}

export default App;
