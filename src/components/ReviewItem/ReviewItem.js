import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
const {name, quantity} = props.item
    return (
        <div className="review-item">
            <h1>{name}</h1>
            <p>Quantity: {quantity}</p>
            <button className="common-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;