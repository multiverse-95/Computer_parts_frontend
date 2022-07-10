import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/mainPage.css';

class SecondTitle extends React.Component{
    render() {
        return(
            <div className="second-title">
                <Row>
                    <Col sm>
                        <div className="capabilities-div">
                            <img className="capabilities-image" height="250" width="250" src={require('../../../assets/images/capabilities/constructor.jpg')}  alt="category"/>
                        </div>
                        <div>
                            <h4>Конструктор</h4>
                        </div>

                    </Col>
                    <Col sm>
                        <div className="capabilities-div">
                            <img className="capabilities-image" height="250" width="250" src={require('../../../assets/images/capabilities/calc.jpg')}  alt="category"/>
                        </div>
                        <div>
                            <h4>Калькулятор блока</h4>
                        </div>

                    </Col>
                    <Col sm>
                        <div className="capabilities-div">
                            <img className="capabilities-image" height="250" width="250" src={require('../../../assets/images/capabilities/news.jpg')}  alt="category"/>
                        </div>
                        <div>
                            <h4>Новости</h4>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default SecondTitle;