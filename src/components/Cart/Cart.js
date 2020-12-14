import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart}) => {
const productPrice = cart.reduce((total, pd)=> total + pd.price, 0);
const productFixedPrice = parseFloat(productPrice.toFixed(2));

let vatTax = productFixedPrice * .1;
let totalVatTax = parseFloat(vatTax.toFixed(2));
let shipping = 0;

if(productFixedPrice) {
    shipping = 10;
}
if(productFixedPrice > 200) {
    shipping = 0;
}
const tempTotal = productFixedPrice + totalVatTax + shipping;
const totalPrice = parseFloat(tempTotal.toFixed(2))
    return (
        <div>
           <h4>Items ordered: {cart.length} </h4>
           <p>Product Price: ${productFixedPrice} </p>
           <p>Shipping Price: ${shipping}</p>
           <p>Vat & Tax: ${totalVatTax}</p>
           <h5 style={{color: "orangered"}}>Total Price: ${totalPrice}</h5>
           
<Link to="/review"><button className="common-btn">Review Order</button></Link>
            
        </div>
    );
};

export default Cart;