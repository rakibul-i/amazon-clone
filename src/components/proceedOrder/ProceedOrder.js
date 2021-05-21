import React, { useState, useMemo } from 'react';
import './proceedOrder.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Link } from 'react-router-dom';


const ProceedOrder = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    };
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


    return (
        <div className="container my-5">
            <h2>Select a shipping address</h2>
            <p className="my-3">Please enter a shipping address for this order. Please also indicate whether your billing address is the same as the shipping address entered. When finished, click the "Continue" button.  Or, if you're sending items to more than one address, click the "Add another address" button to enter additional addresses.</p>
            <div className="row">
                <div className="col-lg-6 col-md-7 col-12">
                    <h3>Add a new address</h3>
                
                
                <div className="shipping__address p-2">
                <form>
                    <div className="selectCountry">
                        <label>Country/Region</label>
                        <Select options={options} value={value} onChange={changeHandler} />
                    </div>
                    <div className="name my-2">
                        <label>Full Name(First and Last Name)</label>
                        <input name="name" type="text" placeholder="" className="form-control" required />
                    </div>
                    <div className="phone my-2">
                        <label>Phone Number</label>
                        <input name="phone" placeholder="" className="form-control"  required/>
                    </div>
                    <div className="address">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Street address or P.O. Box" className="form-control my-1" required />
                        <input type="text" placeholder="Apt, suite, unit, building, floor, etc."className="form-control" required />
                    </div>
                    <div className="unit">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-5">
                                <label htmlFor="">City</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-4">
                                <label htmlFor="">State</label>
                                <input type="text" className="form-control"  />
                            </div>
                            <div className="col-lg-3 col-md-3 col-3">
                                <label htmlFor="">ZIP Conde</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="default my-4 d-flex">
                        <input type="checkbox" className="mt-1 mr-1" /> <h6> Make this my default address</h6>
                    </div>
                    <button type="submit" className="make__payment"><Link  to="/makePayment">Use this address</Link></button>
                </form>
                </div>

                </div>
                <div className="col-md-5">
                
                </div>
            </div>
        </div>
    );
};

export default ProceedOrder;