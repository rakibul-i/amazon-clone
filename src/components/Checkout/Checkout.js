import React from 'react';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../Home/StateProvider/StateProvider';

const Checkout = () => {
    const [{basket}] = useStateValue();


    return (
        <div className="checkout">
           {
               basket?.length === 0 ? (
                   <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click 
                        "Add to basket" next to the item.
                    </p>
                    </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket </h2>
                    {
                        basket.map(item => <CheckoutProduct item={item}></CheckoutProduct> )
                    }
                </div>
            )
           }
        </div>
    );
};

export default Checkout;