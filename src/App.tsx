import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, Button, Carousel, Col, Container, Row} from 'react-bootstrap';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";
import {Routes, Route, Link, Router} from 'react-router-dom';
import VideoCardsPage from "./pages/VideoCardsPage";
import React from "react";

function App() {
  return (
      <div>
        <Header></Header>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/products/videocards" element={<VideoCardsPage />}/>
              <Route path="/products/processors" element={<VideoCardsPage />}/>
              <Route path="/products/memory" element={<VideoCardsPage />}/>
              <Route path="/products/motherboards" element={<VideoCardsPage />}/>
              <Route path="/products/coolers" element={<VideoCardsPage />}/>
              <Route path="/products/power" element={<VideoCardsPage />}/>
              <Route path="/products/box" element={<VideoCardsPage />}/>
          </Routes>
          <Footer></Footer>
      </div>

  );
}

export default App;
