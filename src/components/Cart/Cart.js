import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{ cart} = props
const productPrice = cart.reduce((total, pd)=> total+ pd.price * pd.quantity, 0);
const productFixedPrice = parseFloat(productPrice.toFixed(2)) ;

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
        {
            props.children
        }
        </div>
    );
};

export default Cart;