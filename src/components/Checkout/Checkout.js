import React from 'react';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../Home/StateProvider/StateProvider';
import './checkout.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Home/StateProvider/Reducer';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [{basket}] = useStateValue();

    const totalPrice = basket?.reduce((amount,item) => item.price + amount, 0 );
    
    //react-currency-format using for calculation
    return (
        <div className="container checkout">
            <div className="checkout__left">
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
           {basket.length > 0 && (
               <div className="checkout__right">
                   
                   <h1 className="subtotal">Subtotal</h1>
                    <p>items {basket.length} </p>
                    <div> <small>Price: $</small><strong>{totalPrice.toPrecision(5)}</strong>  </div>
                   <Link to="/orderProceed" className=" btn proccedToCheckOut">Proceed to Checkout</Link>
               </div>
           )}
           
        </div>
    );
};

export default Checkout;