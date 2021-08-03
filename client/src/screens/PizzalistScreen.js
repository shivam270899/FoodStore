import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza, getAllPizzas } from '../actions/pizzaAction';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function PizzalistScreen() {
    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducers);
    const { pizzas, loading, error } = pizzasState;
    useEffect(() => {
        dispatch(getAllPizzas());
    }, [])
    return (
        <div>
            <br/>
            <h1>Pizza List</h1>
            <br/>
            {loading && <Loading />}
            {error && <Error error='something went wrong' />}
            <table className="table table-bordered table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small: {pizza.prices[0]['small']}<br/>
                                Medium: {pizza.prices[0]['medium']}<br/>
                                Large: {pizza.prices[0]['large']}<br/>
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className="fa fa-trash m-3" onClick={() => {dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-3"/></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}