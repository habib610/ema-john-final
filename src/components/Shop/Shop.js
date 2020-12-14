import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState(fakeData.slice(0,20));
   


    return (
        <div className="product-container">
            <div className="shop-container">
                {
                    products.map(pd => <Product showAddBtn={true}  product={pd} key={pd.key}></Product>)
                }
            </div>
            <div className="cart">
     <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;


// const newCart=[...cart, product];
// setCart(newCart)
// const sameProduct = newCart.filter(pd=> pd.key === product.key);

// const count = sameProduct.length;
// addToDatabaseCart(product.key, count)