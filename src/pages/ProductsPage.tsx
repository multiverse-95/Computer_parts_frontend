import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../assets/css/productsPage.css';
import ProductFilters from "../components/ProductsPage/productFilters/ProductFilters";
import ProductList from "../components/ProductsPage/productList/ProductList";

class ProductsPage extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <Container fluid>
                        <Row>
                            <Col md={3}>
                                <ProductFilters></ProductFilters>
                            </Col>
                            <Col md={9}>
                                <ProductList></ProductList>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default ProductsPage;