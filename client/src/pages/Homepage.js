import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Spacer from "../components/Spacer"

class Homepage extends Component {
    render() {
        return (
            <>
                {/* <Spacer/> */}
                <Jumbotron>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="md-6 sm-12">
                            <div className="greybox">
                                <h1 className="heart">Our Heart</h1>
                                <h4 className="heart">
                                    “Bring the full tithe into the <strong style={{ color: "#CABCB0" }}>storehouse</strong>, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is <strong style={{ color: "#CABCB0" }}>no more need</strong>.”
                            </h4>
                                <h5 className="heart">
                                    ‭‭Malachi‬ ‭3:10‬
                            </h5>
                            </div>
                        </Col>
                        <Col size="md-6 sm-12">
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6 sm-12">
                        </Col>
                        <Col size="md-6 sm-12">
                            <div className="greybox-mission">
                                <h1 className="heart">Mission</h1>
                                <h4 className="heart">
                                    Our mission as <strong style={{ color: "#CABCB0" }}>The Storehouse Chicago</strong> is to come alongside and empower individuals and families in our city to meet their <strong style={{ color: "#CABCB0" }}>short-term needs</strong> so that they can focus on their <strong style={{ color: "#CABCB0" }}>future aspirations</strong>.
                            </h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="lg-2 6">
                            <span style={{ textAlign: "center" }}>
                                <h2 className="stats">2.7 million</h2>
                                <h5 className="stats-info">residents in Chicago</h5>
                            </span>
                        </Col>
                        <Col size="lg-2 6">
                            <span style={{ textAlign: "center" }}>
                                <h2 className="stats">20.6%</h2>
                                <h5 className="stats-info">live below the poverty line</h5>
                            </span>
                        </Col>
                        <Col size="lg-2 6">
                            <span style={{ textAlign: "center" }}>
                                <h2 className="stats">5,450</h2>
                                <h5 style={{ marginBottom: "35px" }} className="stats-info">individuals are homeless</h5>
                            </span>
                        </Col>
                        <Col size="lg-2 6">
                            <span style={{ textAlign: "center" }}>
                                <h2 className="stats">565</h2>
                                <h5 style={{ marginBottom: "35px" }} className="stats-info">families living in shelters</h5>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-4 sm-8 9">
                            <img className="homepage-sponsoree" src="/images/sponsoree1.jpg"></img>
                        </Col>
                        <Col size="md-4 sm-8 9">
                            <img className="homepage-sponsoree" src="/images/sponsoree2.jpg"></img>
                        </Col>
                        <Col size="md-4 sm-8 9">
                            <img className="homepage-sponsoree" src="/images/sponsoree3.jpg"></img>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Homepage;