import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
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
        <h1 style={{fontSize:"10vh"}}>mer·chan·dise</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12 sm-6">
              <div className="greybox">
                <h1 className="heart">MERCH SHOP</h1>
                <h4 className="heart">
                  All proceeds from our{" "}
                  <strong style={{ color: "#CABCB0" }}>merch</strong> go
                  towards families and individuals we are sponsoring.
                  Stay fresh, my{" "}
                  <strong style={{ color: "#CABCB0" }}>friends</strong>.
                </h4>
                <h5 className="heart">‭‭- Designed by Davis</h5>
              </div>
            </Col>
            <Col size="md-4 sm-12">
              <div className="white-1"></div>
            </Col>
            <Col size="md-4 sm-12">
              {/* <div className="placeholderImg-1"></div> */}
              <div className="greybox">
                <h1 className="heart">CREW NECK</h1>
                <h4 className="heart">
                  Color:{" "}
                  <strong style={{ color: "#CABCB0" }}>White</strong> 
                  <p></p>
                  Size: &nbsp;
                  <select multiple={false} name="sizes"
                  onChange={this.handleSizeChange}
                  sizevalue={this.state.sizevalue}>
                  <option defaultValue="">Select</option>
                  {/* <option value="XS">XS</option> */}
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  {/* <option value="XXL">XXL</option> */}
                </select>
                &nbsp;
                <p></p>
              Qty:&nbsp;<select multiple={false} name="quantity"
                  onChange={this.handleQuantityChange}
                  quantityvalue={this.state.quantityvalue}>
                  <option defaultValue="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p></p>
              <button className="cartBtn">Add to Cart</button>
                </h4>
              </div>
            </Col>
            <Col size="md-4 sm-12">
              <div className="white-2"></div>
            </Col>
          </Row>
          <Row>
            <Col size="md-4 sm-12">
            {/* <div className="placeholderImg-2"></div> */}
            <div className="greybox">
                <h1 className="heart">CROP HOODIE</h1>
                <h4 className="heart">
                  Color:{" "}
                  <strong style={{ color: "#CABCB0" }}>Heather</strong> 
                  <p></p>
                  Size: &nbsp;
                  <select multiple={false} name="sizes"
                  onChange={this.handleSizeChange}
                  sizevalue={this.state.sizevalue}>
                  <option defaultValue="">Select</option>
                  {/* <option value="XS">XS</option> */}
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  {/* <option value="XXL">XXL</option> */}
                </select>
                &nbsp;
                <p></p>
              Qty:&nbsp;<select multiple={false} name="quantity"
                  onChange={this.handleQuantityChange}
                  quantityvalue={this.state.quantityvalue}>
                  <option defaultValue="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p></p>
              <button className="cartBtn">Add to Cart</button>
                </h4>
              </div>
            </Col>
            <Col size="md-4 sm-12">
            <div className="heatherdust-1"></div>
            </Col>
            <Col size="md-4 sm-12">
            <div className="heatherdust-2"></div>
            </Col>

            <Col size="md-4 sm-12">
              <div className="peach-1"></div>
            </Col>
            <Col size="md-4 sm-12">
              {/* <div className="placeholderImg-1"></div> */}
              <div className="greybox">
                <h1 className="heart">CREW NECK</h1>
                <h4 className="heart">
                  Color:{" "}
                  <strong style={{ color: "#CABCB0" }}>Peach</strong> 
                  <p></p>
                  Size: &nbsp;
                  <select multiple={false} name="sizes"
                  onChange={this.handleSizeChange}
                  sizevalue={this.state.sizevalue}>
                  <option defaultValue="">Select</option>
                  {/* <option value="XS">XS</option> */}
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  {/* <option value="XXL">XXL</option> */}
                </select>
                &nbsp;
                <p></p>
              Qty:&nbsp;<select multiple={false} name="quantity"
                  onChange={this.handleQuantityChange}
                  quantityvalue={this.state.quantityvalue}>
                  <option defaultValue="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p></p>
              <button className="cartBtn">Add to Cart</button>
                </h4>
              </div>
            </Col>
            <Col size="md-4 sm-12">
              <div className="peach-2"></div>
            </Col>
          </Row>
          <Row>
          <Col size="md-4 sm-12">
            {/* <div className="placeholderImg-2"></div> */}
            <div className="greybox">
                <h1 className="heart">CROP HOODIE</h1>
                <h4 className="heart">
                  Color:{" "}
                  <strong style={{ color: "#CABCB0" }}>Storm</strong> 
                  <p></p>
                  Size: &nbsp;
                  <select multiple={false} name="sizes"
                  onChange={this.handleSizeChange}
                  sizevalue={this.state.sizevalue}>
                  <option defaultValue="">Select</option>
                  {/* <option value="XS">XS</option> */}
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  {/* <option value="XXL">XXL</option> */}
                </select>
                &nbsp;
                <p></p>
              Qty:&nbsp;<select multiple={false} name="quantity"
                  onChange={this.handleQuantityChange}
                  quantityvalue={this.state.quantityvalue}>
                  <option defaultValue="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p></p>
              <button className="cartBtn">Add to Cart</button>
                </h4>
              </div>
            </Col>
            <Col size="md-4 sm-12">
            <div className="storm-1"></div>
            </Col>
            <Col size="md-4 sm-12">
            <div className="storm-2"></div>
            </Col>
                       
            <Col size="md-12 sm-12">
              <div className="greybox-mission">
                <h1 className="heart">DONATE</h1>
                <h4 className="heart">
                  If our merch ain't for you, {" "}
                  <strong style={{ color: "#CABCB0" }}>
                    The Storehouse Chicago
                  </strong>{" "}
                  welcomes donations as well. {" "}
                  <strong style={{ color: "#CABCB0" }}>Click the button below</strong>{" "}
                  to redirect you to our donation page. You are making a difference.{" "}
                  
                </h4>
                <button className="donateBtn">Donate</button>
                <p></p>
                <strong style={{ color: "#CABCB0" }}>
            See our sponsorees below.
                  </strong>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default Merch;