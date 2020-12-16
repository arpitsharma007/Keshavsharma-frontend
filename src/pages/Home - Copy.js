import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import {UserContext} from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {

    const context = useContext(UserContext);
    
    const [product, setProduct] = useState({
    name: "Tesla Roadster",
    price: 60.00,
    description: "Cool car"
    });
    
    if(!context.user?.uid) {
        return <Redirect to="/signin" />
    }

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "http://localhost:8000/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="container">
            <div className="product">
            <h1>{product.name}</h1>
            <h3>On Sale · ${product.price}</h3>
            </div>
            <StripeCheckout
            stripeKey="pk_test_YmIYdd4THU1ZqwMPMKnuqTmx00r0XUG0e1"
            token={handleToken}
            amount={product.price * 100}
            name="Tesla Roadster"
            billingAddress
            shippingAddress
            />
        </div>
    );
}

export default Home;