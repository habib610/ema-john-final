import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const products = fakeData.slice(0,20);
   const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        const sameProduct = newCart.filter(pd=> pd.key === product.key);
        const count = sameProduct.length
        addToDatabaseCart(product.key, count)
        setCart(newCart)
    }


    return (
        <div className="product-container">
            <div className="shop-container">
                {
                    products.map(pd => <Product showAddBtn={true}  product={pd} key={pd.key}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;


