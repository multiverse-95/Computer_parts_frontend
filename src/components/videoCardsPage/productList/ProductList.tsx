import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/videoCards.css';
import ProductButton from "./ProductButton";

class ProductList extends React.Component{
    render() {
        return(
            <div className="productList">
                <Container fluid>
                    <Row className="productItem">
                        <Row>
                            <Col md={4}>
                                <div className="productItemImage-div">
                                    <img className="productItem-image" height="180" width="280" src={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <p>
                                            Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><ProductButton linkUrl={'/products/videocards'} textButton="Открыть"></ProductButton></Col>
                                </Row>

                            </Col>
                        </Row>
                    </Row>
                    <Row className="productItem">
                        <Row>
                            <Col md={4}>
                                <div className="productItemImage-div">
                                    <img className="productItem-image" height="180" width="280" src={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <p>
                                            Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><ProductButton linkUrl={'/products/videocards'} textButton="Открыть"></ProductButton></Col>
                                </Row>

                            </Col>
                        </Row>
                    </Row>
                    <Row className="productItem">
                        <Row>
                            <Col md={4}>
                                <div className="productItemImage-div">
                                    <img className="productItem-image" height="180" width="280" src={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <p>
                                            Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><ProductButton linkUrl={'/products/videocards'} textButton="Открыть"></ProductButton></Col>
                                </Row>

                            </Col>
                        </Row>
                    </Row>
                    <Row className="productItem">
                        <Row>
                            <Col md={4}>
                                <div className="productItemImage-div">
                                    <img className="productItem-image" height="180" width="280" src={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <p>
                                            Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><ProductButton linkUrl={'/products/videocards'} textButton="Открыть"></ProductButton></Col>
                                </Row>

                            </Col>
                        </Row>
                    </Row>


                </Container>
            </div>
        )
    }
}
export default ProductList;