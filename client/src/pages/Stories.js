import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";

class Stories extends Component {
    state = {
        to: "",
        note: "",
        from: ""
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
        API.createNote({
            to: this.state.to,
            note: this.state.note,
            from: this.state.from
        })
            .then(this.setState({
                to: "",
                note: "",
                from: ""
            }))
            .catch(err => console.log(err));
    };
    render(){
        return(
        <>
            <Jumbotron jumboClass="jumbotron landing"></Jumbotron>
            <Container>
                <Row>
                    <Col size="md-6 sm-12">
                    <div className="sponsoree1"></div>
                    </Col>
                    <Col size="md-6 sm-12">
                    <div className="greybox">
                    <h5> 
                                In West Philadelphia born and raised
                                On the playground is where I spent most of my days
                                Chilling out, maxing, relaxing all cool
                                And all shooting some b-ball outside of the school
                                When a couple of guys who were up to no good
                                Started making trouble in my neighborhood
                                I got in one little fight and my mom got scared
                                And said "You're moving with your auntie and uncle in Bel-Air"
                            </h5>
                            <h5>
                                I begged and pleaded with her day after day
                                But she packed my suitcase and sent me on my way
                                She gave me a kiss and then she gave me my ticket
                                I put my Walkman on and said "I might as well kick it"
                                First class, yo, this is bad
                                Drinking orange juice out of a champagne glass
                                Is this what the people of Bel-Air living like?
                                Hmmm, this might be all right
                                But wait, I hear they're prissy, bourgeois, and all that
                                Is this the type of place that they should send this cool cat?
                                I don't think so, I'll see when I get there
                                I hope they're prepared for the Prince of Bel-Air
                            </h5>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </> 
        );
    }
}

export default Stories