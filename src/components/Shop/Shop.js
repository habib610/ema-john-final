import React, { useEffect } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const products = fakeData.slice(0,20);
   const [cart, setCart] = useState([])
//confusion here 38.5 
    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const previousCart = productKeys.map(prdKey => {
            const product = fakeData.find(prd => prd.key = prdKey);
            product.quantity = savedCart[prdKey];
            return product;
        })
        setCart(previousCart)
    }, [])

    const handleAddToCart = (product) => {
        // this code i am not clear finally need to be recheck 38.4
      const toBeAdded = product.key;

      const sameProduct = cart.find(pd => pd.key === toBeAdded);
      let count = 1;
      let newCart;
      if(sameProduct) {
          count = sameProduct.quantity + 1
          const others = cart.filter(pd => pd.key !== sameProduct)
          newCart = [...others, sameProduct];
      }
      else {
         product.quantity = 1;
         newCart = [...cart, product]
      }
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
                <Cart cart={cart} > 
                <Link to="/review"><button className="common-btn">Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;


