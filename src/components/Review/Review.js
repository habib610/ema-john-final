import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (product) => {
        const newCart = cart.filter(pd => pd.key !== product)
        setCart(newCart)
        removeFromDatabaseCart(product)
    }

    useEffect( ()=>{
       const savedCart =  getDatabaseCart();
       const productKeys = Object.keys(savedCart);
       const cartProducts = productKeys.map(key => {
           const products = fakeData.find(pd => pd.key === key)
           products.quantity = savedCart[key]
           return products
       })
    setCart(cartProducts)
    }, [])
    
    const [orderPlaced, setOrderPlaced] = useState(false);
    const placeOrder = () => {
        setCart([]);
        processOrder()
        setOrderPlaced(true)
    }
    return (
        <div className="product-container ">
            <div className="shop-container">
            {
                cart.map(item => <ReviewItem 
                    removeProduct={removeProduct}
                    key= {item.key} item ={item} /> )
            }
            </div>
           { orderPlaced && <div>
               <img src={happyImage} alt=""/></div>}
            <div className="cart">
                <Cart cart={cart}>
                <button onClick={placeOrder} className="common-btn">Place Order</button>
                </Cart>

            </div>
        </div>
    );
};

export default Review;
//  shop-container cart