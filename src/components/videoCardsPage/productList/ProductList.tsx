import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/videoCards.css';
import ProductButton from "./ProductButton";
import ProductItem from "./ProductItem";

class ProductList extends React.Component{
    render() {
        return(
            <div className="productList">
                <Container fluid>
                    <ProductItem linkUrl="/" imageUrl={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')} nameProduct="Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]" textButton="Открыть"></ProductItem>
                    <ProductItem linkUrl="/" imageUrl={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')} nameProduct="Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]" textButton="Открыть"></ProductItem>
                    <ProductItem linkUrl="/" imageUrl={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')} nameProduct="Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]" textButton="Открыть"></ProductItem>
                    <ProductItem linkUrl="/" imageUrl={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')} nameProduct="Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]" textButton="Открыть"></ProductItem>
                </Container>
            </div>
        )
    }
}
export default ProductList;