import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import CategoryButton from "./CategoryButton";
class Category extends React.Component{
    render() {
        return(
            <div className="category">
                <Container>
                    <CategoryButton nameButton="test"></CategoryButton>
                    <CategoryButton nameButton="test2"></CategoryButton>
                    <CategoryButton nameButton="test3"></CategoryButton>
                    <CategoryButton nameButton="test4"></CategoryButton>
                    <CategoryButton nameButton="test5"></CategoryButton>
                    <CategoryButton nameButton="test6"></CategoryButton>
                    <CategoryButton nameButton="test7"></CategoryButton>
                </Container>
            </div>
        )
    }
}
export default Category;