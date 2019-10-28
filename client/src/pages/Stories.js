import React, { Component } from "react";
import { Col, Col2, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Modal from "../components/Modal"
// import Button from "../components/Button"
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
            <span className="stories-page">
            <Jumbotron jumboClass="jumbotron landing"></Jumbotron>
            <Container>
                <Row>
                    <Col size="md-6 sm-12">
                    <div className="sponsoree1">
                        <p className="sponsoree1-name">Adi Cepela</p>
                    </div>
                    </Col>
                    <Col style={{padding:"0"}} size="md-6 sm-12">
                    <div className="greybox">
                    <h2>Adi's Story</h2>
                    <p className="sponsoree1-story"> 
                                In West Philadelphia born and raised
                                On the playground is where I spent most of my days
                                Chilling out, maxing, relaxing all cool
                                And all shooting some b-ball outside of the school
                                When a couple of guys who were up to no good
                                Started making trouble in my neighborhood
                                I got in one little fight and my mom got scared
                                And said "You're moving with your auntie and uncle in Bel-Air"
                            </p>
                            <p className="sponsoree1-story">
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
                            </p>
                            
                            <button type="button" className="btn btn-circle waves-light" data-toggle="modal" data-target="#noteOfEncouragement" style={{backgroundColor:"#CABCB0", color: "whitesmoke", padding:"5px"}}><i className="fa fa-send" aria-hidden="true"></i> </button>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col2 size="col-md-6 order-md-12">
                    <div className="sponsoree2">
                        <p className="sponsoree2-name">The Birsan's</p>
                    </div>
                    </Col2>
                <Col2 style={{padding:"0"}} size="col-md-6 order-md-1">
                    <div className="greybox2">
                    <h2>Jenni &#38; Davis's Story</h2>
                    <p className="sponsoree2-story"> 
                                In West Philadelphia born and raised
                                On the playground is where I spent most of my days
                                Chilling out, maxing, relaxing all cool
                                And all shooting some b-ball outside of the school
                                When a couple of guys who were up to no good
                                Started making trouble in my neighborhood
                                I got in one little fight and my mom got scared
                                And said "You're moving with your auntie and uncle in Bel-Air"
                            </p>
                            <p className="sponsoree2-story">
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
                            </p>
                            <button type="button" className="btn waves-light" data-toggle="modal" data-target="#noteOfEncouragement" style={{backgroundColor:"#555", color: "whitesmoke", padding:"5px"}}>Note of Encouragement</button>
                    </div>
                    </Col2>
                </Row>
            </Container>
            <Footer/>
            <Modal onChange={this.handleInputChange} statefrom={this.state.from} stateto={this.state.to} statenote={this.state.note} onClick={this.handleFormSubmit} />
        </span> 
        );
    }
}

export default Stories