import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/productsPage.css';
import {Checkbox, FormGroup, FormControlLabel} from "@mui/material";
import {Link} from "react-router-dom";

class ProductFilters extends React.Component{
    render() {
        return(
            <div className="productFilters">
                <div className="productFilters-text">Фильтры</div>
                <div className="productFilters-name-text">Производитель</div>
                <div className="productFilters-item-text">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                        <FormControlLabel control={<Checkbox  />} label="Sample text" />
                    </FormGroup>
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