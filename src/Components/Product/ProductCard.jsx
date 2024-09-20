import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'

function ProductCard({product}) {
    if (!product) return null;
    const {image, title, id, rating, price} = product;
    return (
        <div className={`${classes.card_container}`}>
            <a href="">
                <img src={image}alt="" />
            </a>
            <div>
                <h3>{title}</h3>
                <div className={classes.rating}>
                    {/* rating */}
                    <Rating value={rating.rate} precision={0.1}/>
                    {/* ratinig counter */}
                    <small>{rating.count}</small>
                </div>
                <div>
                    {/* price */}
                    <CurrencyFormat amount= {price}/>
                </div>
                <button className={classes.button}>
                    add to cart
                    </button>
            </div>
        </div>
        // <p>test</p>
    )
}

export default ProductCard
