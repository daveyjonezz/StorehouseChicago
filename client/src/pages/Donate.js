import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import "./pageStyles/donate.css";

class Donate extends Component {

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
        <Jumbotron jumboClass="jumbotron landing donateJumbotron">
        <h1 className="donateLanding"></h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
              <div className="greybox-merchShop">
                <h1 className="merch-info">WHY DONATE?</h1>
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
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default Donate;