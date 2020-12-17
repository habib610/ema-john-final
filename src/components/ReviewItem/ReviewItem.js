import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
const {name, quantity, key, price} = props.item
const {removeProduct} = props;
    return (
        <div className="review-item">
            <h1>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <button
            onClick={()=> removeProduct(key)}
            className="common-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;