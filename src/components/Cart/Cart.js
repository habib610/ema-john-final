import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = () => {

    return (
        <div>
           <h1>This is cart</h1>
<Link to="/review"><button className="common-btn">Review Order</button></Link>
            
        </div>
    );
};

export default Cart;