import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom';
import LowerHeader from './LowerHeader'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";


const Header= ()=> {
    return (
        <>
        <section> 
            <div className= {classes.header_container}>
            {/* logo section*/}
            <div className= {classes.logo_container}>
            <Link to ="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
            </Link>
            <div className= {classes.delivery}>
            <span>
            <SlLocationPin />
            </span>
            <div>
            <p>Delivered to</p>
            <span>USA</span>
            </div>
        </div>
        </div>
        {/* search section */}
        <div className= {classes.search}>
        <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text"/>
            <BsSearch size= {25}/>
        </div>
        {/* other section */}
        <div className={classes.order_container}>
            <Link to ="" className={classes.language}>
            <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />

            <select name= "" id="">
                <option value="">EN</option>
            </select>
            </Link>
            <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
            </a>
        <Link to ="/orders" >
            <p>returns</p>
            <span>& Orders</span>
        </Link>
        <Link to ="/cart" className={classes.cart}>
        <BiCart size= {35}/>
        <span>{0}</span>
        </Link>
        </div>
        </div>
        </section>

<LowerHeader/>
        </>

    );
};

export default Header;
