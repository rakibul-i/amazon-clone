import React from 'react';
import fakeData from '../../../fakeData';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const fakedata = fakeData.slice(0,20);
    return (
        <div className="row px-5">
            {
                fakedata.map(pd => <Product key={pd.key} product={pd}></Product> )
            }
        </div>
    );
};

export default Products;