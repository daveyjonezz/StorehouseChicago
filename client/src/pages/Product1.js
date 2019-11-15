import React, { Component } from "react";
import { Col, Col2, Row, Row2, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import "./pageStyles/product.css";

class Product extends Component {
  
    render() {
      return (
        <>
        <Jumbotron jumboClass="jumbotron productLanding"></Jumbotron>
        <Container>
        <Col size="6">
        </Col>
        </Container>
        </>
      )
  }
}
  
  export default Product;