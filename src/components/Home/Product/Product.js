import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import './Product.css';


const Product = (props) => {
    const {name, key, img, price, star} = props.product;
    const id = key;

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title:name,
                image: img,
                price: price,
                rating:star
            }
        })
    }
    return (
        <div className="product col-lg-4 col-md-6  col-12 p-lg-4 p-md-3 p-2 ">
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
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
};

export default Product;