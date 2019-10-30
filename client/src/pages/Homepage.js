import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";

class Homepage extends Component {

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

handleEmailSubmit = event => {
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
        <Jumbotron jumboClass="jumbotron landing"></Jumbotron>
        <Container>
          <Row>
            <Col size="md-6 sm-12">
              <div className="greybox">
                <h1 className="heart">Our Heart</h1>
                <h4 className="heart">
                  “Bring the full tithe into the{" "}
                  <strong style={{ color: "#CABCB0" }}>storehouse</strong>, that
                  there may be food in my house. And thereby put me to the test,
                  says the Lord of hosts, if I will not open the windows of
                  heaven for you and pour down for you a blessing until there is{" "}
                  <strong style={{ color: "#CABCB0" }}>no more need</strong>.”
                </h4>
                <h5 className="heart">‭‭Malachi‬ ‭3:10‬</h5>
              </div>
            </Col>
            <Col size="md-6 sm-12">
              <div className="placeholderImg-1"></div>
            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
            <div className="placeholderImg-2"></div>
            </Col>
            <Col size="md-6 sm-12">
              <div className="greybox-mission">
                <h1 className="heart">Mission</h1>
                <h4 className="heart">
                  Our mission as{" "}
                  <strong style={{ color: "#CABCB0" }}>
                    The Storehouse Chicago
                  </strong>{" "}
                  is to come alongside and empower individuals and families in
                  our city to meet their{" "}
                  <strong style={{ color: "#CABCB0" }}>short-term needs</strong>{" "}
                  so that they can focus on their{" "}
                  <strong style={{ color: "#CABCB0" }}>
                    future aspirations
                  </strong>
                  .
                </h4>
                <button className="donateBtn">Donate</button>
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
                <h5 style={{ marginBottom: "35px" }} className="stats-info">
                  individuals are homeless
                </h5>
              </span>
            </Col>
            <Col size="lg-2 6">
              <span style={{ textAlign: "center" }}>
                <h2 className="stats">565</h2>
                <h5 style={{ marginBottom: "35px" }} className="stats-info">
                  families living in shelters
                </h5>
              </span>
            </Col>
          </Row>
          <Row>
            <Col size="md-4 sm-8 9">
            <a href="/stories">
              <figure className="sponsoreeHover">
                <img
                  className="homepage-sponsoree"
                  alt="Sponsoree 1"
                  src="/images/sponsoree1.jpg"
                ></img>
                <figcaption>
                  <h3>
                    Jimi <span className="lastName">Loc</span>
                  </h3>
                  <h4>Hear his story</h4>
                </figcaption>
              </figure>
              </a>
            </Col>
            <Col size="md-4 sm-8 9">
            <a href="/stories">
              <figure className="sponsoreeHover">
                <img
                  className="homepage-sponsoree"
                  alt="Sponsoree 2"
                  src="/images/sponsoree2.jpg"
                ></img>
                <figcaption>
                  <h3>
                    Adi <span className="lastName">Cepela</span>
                  </h3>
                  <h4>Hear her story</h4>
                </figcaption>
              </figure>
              </a>
            </Col>
            <Col size="md-4 sm-8 9">
            <a href="/stories">
              <figure className="sponsoreeHover">
                <img
                  className="homepage-sponsoree"
                  alt="Sponsoree 3"
                  src="/images/sponsoree3.jpg"
                ></img>
                <figcaption>
                  <h3>
                    Jenni &#38; Davis{" "}
                    <span className="lastName">Birsan</span>
                  </h3>
                  <h4>Hear their story</h4>
                </figcaption>
              </figure>
              </a>
            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
              <div className="greybox-whatWeDo">
                <h1 className="whatWeDo">What We Do</h1>
                <h4 className="whatWeDo">
                  We believe everyone has a{" "}
                  <strong style={{ color: "#CABCB0" }}>heart</strong> to give, 
                  and at The Storehouse Chicago, we want you to know the story
                  of whoever you are{" "}
                  <strong style={{ color: "#CABCB0" }}>sowing seeds</strong>{" "}
                  for.
                  <br></br>
                  <br></br>
                  As such, we partnered with{" "}
                  <strong style={{ color: "#CABCB0" }}>
                    homeless and low-income individuals/families
                  </strong>{" "}
                  in Chicago to tell their past stories and future dreams.
                  <br></br>
                  <br></br>
                  Our hope is to demystify what your donations are used for as{" "}
                  <strong style={{ color: "#CABCB0" }}>
                    100% of donations and proceeds from merch sales
                  </strong>{" "}
                  go towards our partners.
                </h4>
              </div>
            </Col>
            <Col size="md-6 sm-12">
              <Row>
                <Col size="6">
                  <span style={{ textAlign: "center" }}>
                    <h2 className="stats2">100%</h2>
                    <h5 className="stats2-info">
                      of proceeds go towards sponsorships
                    </h5>
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
                    <h5
                      style={{ marginBottom: "35px" }}
                      className="stats2-info"
                    >
                      fundraised
                    </h5>
                  </span>
                </Col>
                <Col size="6">
                  <span style={{ textAlign: "center" }}>
                    <h2 className="stats2">3</h2>
                    <h5
                      style={{ marginBottom: "35px" }}
                      className="stats2-info"
                    >
                      individuals/families partnered
                    </h5>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Jumbotron jumboClass="jumbotron merch">
          <span className="merchCross">
            <a href="/">
              <h1>Shop Merch</h1>
            </a>
          </span>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-6 12">
              <div className="greybox-whatWeDo">
                <h1 className="whatWeDo">Our Story</h1>
                <h4 className="whatWeDo">In December 2018, we conducted our first outreach effort by packing and delivering shoebox Christmas presents to the homeless throughout Chicago.</h4>
                <br></br>
                <h4 className="whatWeDo">Although we plan to continue the shoebox tradition, our heart to build relationships with people.</h4>
              </div>
            </Col>
            <Col size="md-3 6">
              <span className="founder" style={{ textAlign: "center" }}>
                <img
                  className="homepage-founder"
                  alt="Davis"
                  src="/images/founder-davis.jpg"
                ></img>
                <h2>Davis</h2>
                <h6>
                  Amatuer <strong style={{ color: "#CABCB0" }}>Sneaker</strong>{" "}
                  Head
                </h6>
                <h5>Co-Founder</h5>
              </span>
            </Col>
            <Col size="md-3 6">
              <span className="founder" style={{ textAlign: "center" }}>
                <img
                  className="homepage-founder"
                  alt="Jenni"
                  src="/images/founder-jenni.jpg"
                ></img>
                <h2>Jenni</h2>
                <h6>
                  Aspiring{" "}
                  <strong style={{ color: "#CABCB0" }}>Met Gala</strong> Planner
                </h6>
                <h5>Co-Founder</h5>
              </span>
            </Col>
          </Row>
        </Container>
        <Footer onChange={this.handleInputChange} stateEmail={this.state.email} onClick={this.handleEmailSubmit}></Footer>
      </>
    );
  }
}

export default Homepage;
