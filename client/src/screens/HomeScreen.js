import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaAction';
import Error from '../components/Error';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import Pizza from '../components/Pizza';
export default function HomeScreen() {

    const dispatch = useDispatch();

    const pizzasState = useSelector(state => state.getAllPizzasReducers);
    const { pizzas, loading, error } = pizzasState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, []);

    return (
        <div>
            <Filter/>
            <div className="row justify-content-center">
                {loading ? (<Loading/>) : error ? (<Error error='something went wrong'/>) :
                    (
                        pizzas.map(pizza => {
                            return <div className="col-md-4"  key={pizza._id}>
                                <div>
                                    <Pizza pizza={pizza} />
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
};