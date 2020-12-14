import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (  props ) => {
    const { img, name, price, seller, stock, key } = props.product;

    return (
        <div className="product">
            <div className="avatar">
                <img src={img} alt="" />
            </div>
            <div className="details">
              <Link to={`/product/${key}`}><h2>{name}</h2></Link>  
                <h4>Price: ${price}</h4>
                <p>{stock} Left</p>
                <p><small>by {seller}</small></p>
       <button className="common-btn"><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
            </div>

        </div>
    );
};

export default Product;