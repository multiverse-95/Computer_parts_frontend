import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import CategoryButton from "./CategoryButton";
class Category extends React.Component{
    render() {
        return(
            <div className="category">
                <Container>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/console.png')} textButton="  Видеокарты"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/processor.png')} textButton="  Процессоры"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/memory.png')} textButton="  ОЗУ"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/motherboard.png')} textButton="  Платы"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/cooler.png')} textButton="  Кулеры"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/power.png')} textButton="  Блоки питания"></CategoryButton>
                    <CategoryButton imageUrl={require('../../../assets/images/categoryImages/box.png')} textButton="  Корпуса"></CategoryButton>
                </Container>
            </div>
        )
    }
}
export default Category;