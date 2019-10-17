import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Homepage extends Component {
    render() {
        return (
            <>
                <Jumbotron jumboClass="jumbotron landing">
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
                            <figure class="sponsoreeHover">
                                <img className="homepage-sponsoree" src="/images/sponsoree1.jpg"></img>
                                <figcaption>
                                    <h3>Jimi <strong style={{ color: "#CABCB0" }}>Loc</strong></h3>
                                    <h4>Hear his story</h4>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col size="md-4 sm-8 9">
                            <figure class="sponsoreeHover">
                                <img className="homepage-sponsoree" src="/images/sponsoree2.jpg"></img>
                                <figcaption>
                                    <h3>Adi <strong style={{ color: "#CABCB0" }}>Cepela</strong></h3>
                                    <h4>Hear her story</h4>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col size="md-4 sm-8 9">
                            <figure class="sponsoreeHover">
                                <img className="homepage-sponsoree" src="/images/sponsoree3.jpg"></img>
                                <figcaption>
                                    <h3>Jenni &#38; Davis <strong style={{ color: "#CABCB0" }}>Birsan</strong></h3>
                                    <h4>Hear their story</h4>
                                </figcaption>
                            </figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6 sm-12">
                            <div className="greybox-whatWeDo">
                                <h1 className="whatWeDo">What We Do</h1>
                                <h5 className="whatWeDo">
                                    We believe everyone has a <strong style={{ color: "#CABCB0" }}>heart</strong> to give. And at The Storehouse Chicago, we want you to know the story of whoever you are <strong style={{ color: "#CABCB0" }}>sowing seeds</strong> for.
                                    <br></br>
                                    <br></br>
                                    As such, we partnered with <strong style={{ color: "#CABCB0" }}>homeless and low-income individuals/families</strong> in Chicago to tell their past stories and future dreams.
                                     <br></br>
                                    <br></br>
                                    Our hope is to demystify what your donations are used for as <strong style={{ color: "#CABCB0" }}>100% of donations and proceeds from merch sales</strong> go towards our partners. But most importantly, we want give our partners the boost they desperately need in their current situation to <strong style={{ color: "#CABCB0" }}>propel them to their future</strong>.
                            </h5>
                            </div>
                        </Col>
                        <Col size="md-6 sm-12">
                            <Row>
                                <Col size="6">
                                    <span style={{ textAlign: "center" }}>
                                        <h2 className="stats2">100%</h2>
                                        <h5 className="stats2-info">of proceeds go towards sponsorships</h5>
                                    </span>
                                </Col>
                                <Col size="6">
                                    <span style={{ textAlign: "center" }}>
                                        <h2 className="stats2">$4,500</h2>
                                        <h5 className="stats2-info">fundraising target</h5>
                                    </span>
                                </Col>
                                <Col size="6">
                                    <span style={{ textAlign: "center" }}>
                                        <h2 className="stats2">$240</h2>
                                        <h5 style={{ marginBottom: "35px" }} className="stats2-info">fundraised</h5>
                                    </span>
                                </Col>
                                <Col size="6">
                                    <span style={{ textAlign: "center" }}>
                                        <h2 className="stats2">3</h2>
                                        <h5 style={{ marginBottom: "35px" }} className="stats2-info">individuals/families partnered</h5>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron jumboClass="jumbotron merch">
                    <span className="cl-effect-18">
                    <a href="#"><h1>Shop Merch</h1></a>
                    </span>
                </Jumbotron>
            </>
        );
    }
}

export default Homepage;