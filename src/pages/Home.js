import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Container, Form, Button, FormGroup, Label, Col, Input, Row, Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import StripeCheckout from 'react-stripe-checkout';
import {UserContext} from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";


import "react-toastify/dist/ReactToastify.css";

const Home = () => {

    const context = useContext(UserContext);

    return (
        <Container style={{padding: 40, paddingBottom: 490,}}>
            <h1 className='text-center' style={{paddingBottom: 60,}}>Book your session Now</h1>
             <Row>
                <Col lg={6}>
                    <Card>
                        <CardHeader className='text-center'><h1>One on One Sessions</h1></CardHeader>
                        <CardBody className='text-center'>
                            <p>A personalised 15-30 minutes session addressing to you indvidualy</p>
                        </CardBody>
                        <CardFooter className='text-center'>
                            <Link to="/oneonone" className="text-white booknow">Book Now</Link>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <CardHeader className='text-center'><h1>Group Sessions</h1></CardHeader>
                        <CardBody className='text-center'>
                            <p>A group session consisting of 15 members of 30 minutes</p>
                        </CardBody>
                        <CardFooter className='text-center'>
                            <Link to="/groupsession" className="text-white booknow">Book Now</Link>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;