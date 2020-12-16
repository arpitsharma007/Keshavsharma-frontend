import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Form, Button, FormGroup, Label, Col, Input, Row, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import StripeCheckout from 'react-stripe-checkout';
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import dotenv from 'dotenv';

import "react-toastify/dist/ReactToastify.css";

const Groupsession = () => {

    const context = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [product, setProduct] = useState({
        name: "Group Session",
        price: 7.45,
        description: "User has signed up for Group Session",
    });

    const contact = {
        Name: name,
        Email: email,
        Phone: phone
    }

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://keshavsharma-backend.web.app/xxujye"
        );
        const { status } = response.data;
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong. If payment was deducted, it will be refunded within 3-5 business days.", { type: "error" });
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault()
    }



    return (
        <>
            <Container>
                <br />
                <br />
                <h1>Group Sessions</h1>
                <br />
                <b>Price:</b><span> $7.45</span>
                <br />
                <br />
                <p>A 30-45 minute session that involves a close group of 15 members where we connect about various aspects of well being. The discussion topics would be updated via Mail and/or Twitter where you would be provided this link to register. We’ll talk about everything ranging from wellness and mindfulness.</p>
                <ol>
                    <li>These calls would be 25-30 minutes long, the details for the same will be provided to you once you register for a class.</li>
                    <li>The call would be held on ZOOM in a private room to ensure privacy.</li>
                    <li>Please do check your mail for confirmation of the scheduled meeting. Sometimes the invite could be in the Spam folder, please make sure you check both.</li>
                    <li>In case any troubles are faced, please reach out on the Contact Me form or via Twitter.</li>
                </ol>
                <br />
                <br />
                <b>Disclaimer:</b>
                <span> Please note that these guidances are based out of experience. We do not claim this to be medical and/or a replacement of any medical procedures for any physical or mental conditions. For any advice, you are welcome to take a second opinion from your medical practitioner.</span>



            </Container>    
            <Container className='text-center'>
                <Row>
                    <Col lg={6} className='offset-lg-3 mt-5 mb-5'>
                        <Card>
                            <Form onSubmit={handlesubmit}>
                                <CardHeader className=''>Fill your details here to pay</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='Name' sm={3}>
                                            Name
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='text'
                                                name='Name'
                                                id='Name'
                                                placeholder='Please enter your Name'
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                            Email
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='Please enter your Email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='Phone No.' sm={3}>
                                            Phone No.
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='text'
                                                name='Phone No.'
                                                id='Phone'
                                                placeholder='Please enter your phone no. here'
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <StripeCheckout
                                        stripeKey=""
                                        token={handleToken}
                                        amount={product.price * 100}
                                        contact={contact}
                                        name="Aum Keshav Sharma | Group Session"
                                    />
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Groupsession;