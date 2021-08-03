import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaAction';

export default function Filter() {
    const dispatch = useDispatch();
    const [searchkey, setSearchkey] = useState('');
    const [category, setCategory] = useState('all');
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="col-md-3 w-100">
                        <input type="text" className="form-control w-100" placeholder="search here" value={searchkey} onChange={(e) => {setSearchkey(e.target.value) }}></input>
                    </div>
                    <div className="col-md-3 w-100">
                        <select className="form-control w-100 mt-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-100">
                        <button className="btn w-100 mt-2" onClick={() => {dispatch(filterPizzas(searchkey, category))}}>Filter</button>
                    </div>
            </div>
        </div>
    )
}