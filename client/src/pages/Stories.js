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
                    <Col size="sm-6 12">
                    
                    </Col>
                    <Col size="sm-6 12">
                    
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </> 
        );
    }
}

export default Stories