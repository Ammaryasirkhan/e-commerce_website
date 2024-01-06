import React, { useContext, useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContex";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="nav">
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
        <p>Shopping Cart</p>
      </div>
      <ul className="nav_menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens' >Men</Link>  {menu==="mens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>  {menu==="womens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>  {menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav_login_cart">
        <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cartIcon} alt="" /></Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
