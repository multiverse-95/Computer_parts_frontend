
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Category from "../components/mainPage/category/Category";
import MainTitle from "../components/mainPage/mainTitle/MainTitle";
import SecondTitle from "../components/mainPage/secondTitle/SecondTitle";
import '../assets/css/mainPage.css';
import {Route, Routes} from "react-router-dom";
import VideoCardsPage from "./VideoCardsPage";

class MainPage extends React.Component {
    render() {
        return (

            <div className="main">
                <Container fluid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Category></Category>
                        </Col>
                        <Col xs={12} md={9}>
                            <MainTitle></MainTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           <SecondTitle></SecondTitle>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default MainPage;