import React, { Component } from "react";
import { Col, Col2, Row, Row2, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import "./pageStyles/merch.css";

class Merch extends Component {

  state = {
    email: ""
};

handleInputChange = event => {
  const { name, value } = event.target;
  console.log(name, " : ", value)
  this.setState({
      [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  API.email({
      email: this.state.email
  }).then(
        this.setState({
        email: ""
      })
      )
      .catch(err => console.log(err));
};

  render() {
    return (
      <>
        <Jumbotron jumboClass="jumbotron landing">
        <h1 className="merchLanding">mer·chan·dise</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
              <div className="greybox-merchShop">
                <h1 className="merch-info">MERCH SHOP</h1>
                <h4 className="merch-info">
                  All proceeds from our{" "}
                  <strong style={{ color: "#CABCB0" }}>merch</strong> go
                  towards families and individuals we are sponsoring.
                  Stay fresh, my{" "}
                  <strong style={{ color: "#CABCB0" }}>friends</strong>.
                </h4>
                <h5 className="merch-info">‭‭- Designed by Davis &#38; Jenni</h5>
              </div>
            </Col>
            </Row>
            <Row2>
            <Col2 size="col-lg-4 col-sm-6 col-12 text-center">
                <a href="/heather-dust-cropped-hoodie"><div className="heatherdust-1"></div></a>
                <p className="detail">Women's Cropped Hoodie</p>
                <p className="price">$40</p>
              </Col2>
              <Col2 size="col-lg-4 col-sm-6 col-12 text-center">
                <div className="white-1">
                </div>
                <p className="detail">Unisex Drop Shoulder Sweater</p>
                <p className="price">$40</p>
              </Col2>
             <Col2 size="col-lg-4 col-sm-6 col-12 text-center">
                <div className="storm-1"></div>
                <p className="detail">Women's Cropped Hoodie</p>
                <p className="price">$40</p>
              </Col2>
             <Col2 size="col-lg-4 col-sm-6 col-12 text-center">
              <div className="peach-1">
                <span className="soldOut">SOLD OUT</span>
              </div> 
              <p className="detail">Unisex Drop Shoulder Sweater</p>
              <p className="price" style={{textDecoration:"line-through"}}>$40</p>
              </Col2>
            </Row2>
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default Merch;