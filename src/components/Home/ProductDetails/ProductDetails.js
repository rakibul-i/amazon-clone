import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../../fakeData';
import Header from '../Header/Header';

const ProductDetails = () => {
    const id = useParams();
    const selectedProduct = fakeData.filter(product => product.key === id.id);
    const productDetails = selectedProduct.map(product => product);
    const product = productDetails[0];
    console.log(productDetails[0]);
    return (
        <div>
            <Header/>
            <div className="container my-5  p-3"> 
            <h4>{product.name}</h4>
            <p>Category: <strong>{product.category}</strong> </p>
            <p>Price: $<strong>{product.price}</strong> </p>
            <p>Stock: <strong>{product.stock}</strong> </p>
            <div className="product__rating ">
                {
                    Array(product.star)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <img src={product.img} alt=""/>
            </div>
        </div>
    );
};

export default ProductDetails;