import React from "react";
import {Col, Container, Row, Carousel} from 'react-bootstrap';
import '../../../assets/css/mainPage.css';

class MainTitle extends React.Component{
    render() {
        return(
            <div className="main-title">
                <Carousel>
                    <Carousel.Item>
                        <img
                            height="450"
                            className="d-block w-100"
                            src={require('../../../assets/images/carouselImages/msi-geforce-rtx-3090-ti-suprim-x-1.jpg')}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="450"
                            className="d-block w-100"
                            src={require('../../../assets/images/carouselImages/news.jpg')}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="450"
                            className="d-block w-100"
                            src={require('../../../assets/images/carouselImages/calc.jpg')}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default MainTitle;