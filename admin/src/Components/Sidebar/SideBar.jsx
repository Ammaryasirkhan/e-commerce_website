// src/Sidebar.js
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import appProductItem from '../../Assets/Product_cart.svg'
import listProductIocn from '../../Assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-items">
            <img src={appProductItem} alt="" />
            <p>Add Products</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-items">
            <img src={listProductIocn} alt="" />
            <p> Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
