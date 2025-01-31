import React, { useEffect, useState } from 'react';
import Logo from './../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';


const Header = () => {
    const [cart,setCart] = useState(0);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const values = Object.values(savedCart)
        let cartsItems = values.reduce((total, item)=> total + item,0);
        setCart(cartsItems)
    },[])
    return (
        <div className="header">
            <img src={Logo} alt=""/>
            <nav>
            <NavLink exact to="/shop" activeClassName="active-nav">Shop </NavLink>
            <NavLink  to="/review" activeClassName="active-nav"> Order Review</NavLink>
            <NavLink  to="/inventory" activeClassName="active-nav"> Inventory</NavLink>
            </nav>
            <section className="search">
                <div>
            <input type="text" placeholder="Search Product Here"/>
                </div>
            <div className="cart">
                <div></div>
               <h4><FontAwesomeIcon icon={faCartPlus} /> {cart}</h4>
            </div>
            </section>
        </div>
    );
};

export default Header;