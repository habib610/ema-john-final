import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([]);

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
    return (
        <div>
            {
                cart.map(item => <ReviewItem key = {item.id} item ={item} /> )
            }
        </div>
    );
};

export default Review;