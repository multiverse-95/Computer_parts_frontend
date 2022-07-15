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
                   <Products products={products}></Products>
                </Container>
            </div>
        )
    }

}

const products = [
    {
        id: 1,
        productImage: require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg'),
        productName : 'Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]'
    },
    {
        id: 2,
        productImage: require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg'),
        productName : 'Видеокарта MSI GeForce RTX 3050 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]'
    },
    {
        id: 3,
        productImage: require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg'),
        productName : 'Видеокарта MSI GeForce RTX 3080 Ti GAMING X TRIO [RTX 3070 Ti GAMING X TRIO 8G]'
    },
    ];

function Product(props:any){
    const product = props.product
    return <ProductItem linkUrl="/" imageUrl={product.productImage} nameProduct={product.productName} textButton="Открыть"></ProductItem>

}

function Products(props:any){
    const products = props.products;
    const items = products.map((product:any) => {
        return <Product key={product.id} product={product}/>;
    });
    return (<ul>{items}</ul>);
}
export default ProductList;