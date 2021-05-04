import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const {name, key, img, price, star} = props.product;
    const id = key;
    return (
        <div className="product col-lg-4 col-md-6 col-12 p-lg-4 p-md-3 p-2 ">
            <div className="product__info">
            <Link to={`/${id}`}>{name}</Link>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating ">
                {
                    Array(star)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
            
            <img src={img} alt=""/>
            <button>Add to basket</button>
        </div>
    );
};

export default Product;