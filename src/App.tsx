import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, Button, Carousel, Col, Container, Row} from 'react-bootstrap';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div>
        <Header></Header>
        <MainPage></MainPage>
          <Footer></Footer>
      </div>

  );
}

export default App;
