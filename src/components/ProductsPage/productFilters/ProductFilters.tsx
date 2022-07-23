import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/productsPage.css';
import ProductFilterItem from "./ProductFilterItem";

class ProductFilters extends React.Component{
    render() {
        return(
            <div className="productFilters">
                <div className="productFilters-text">Фильтры</div>
                <div className="productFilters-items">
                    <ProductFilterItem></ProductFilterItem>
                    <ProductFilterItem></ProductFilterItem>
                    <ProductFilterItem></ProductFilterItem>
                </div>
                <div className="productFilters-confirm">
                    <div className="productFilters-confirm-button">
                        <div className="button-open-text">Применить</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ProductFilters;