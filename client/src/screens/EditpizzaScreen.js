import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, getPizzaByid ,updatePizza } from '../actions/pizzaAction';
import Error from '../components/Error';
import Success from '../components/Success';
import Loading from '../components/Loading';

export default function EditpizzaScreen({match}) {
    const [name, setName] = useState("");
    const [smallprice, setSmallprice] = useState("");
    const [mediumprice, setMediumprice] = useState("");
    const [largeprice, setLargeprice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const getpizzastate = useSelector(state => state.getPizzaReducers)
    const { pizza, loading, error } = getpizzastate

    const updatedpizzastate = useSelector(state => state.updatePizzaReducer)
    const { loading:updateloading, error:updateerror, success:updatesuccess} = updatedpizzastate

    

    useEffect(() => {
        if(pizza){
            if(pizza._id == match.params.pizzaid ){
                setName(pizza.name)
                setCategory(pizza.category)
                setDescription(pizza.description)
                setImage(pizza.image)
                setSmallprice(pizza.prices[0]['small'])
                setMediumprice(pizza.prices[0]['medium'])
                setLargeprice(pizza.prices[0]['large'])
            }else{
                dispatch(getPizzaByid(match.params.pizzaid));
            }  
        }else{
            dispatch(getPizzaByid(match.params.pizzaid));
        }
       

    }, [dispatch,pizza])

    function formHandler(e) {
        e.preventDefault();
        const editedPizza = {
            _id:match.params.pizzaid,
            name,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            },
            image,
            category,
            description
        }
        console.log(editedPizza);
        dispatch(updatePizza(editedPizza));
    }

    return (
        <div>
            <br />
            <h1>Edit Pizza</h1>
            <br />
            {updateloading && <Loading/>}
            {updateerror && <Error error='something went wrong'/>}
            {updatesuccess && <Success success='pizza updated successfully'/>}
            <h1>Pizza Id: {match.params.pizzaid}</h1>
            <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input className="form-control" type="text" value={smallprice} onChange={(e) => setSmallprice(e.target.value)} placeholder="small Varients" />
                    <input className="form-control" type="text" value={mediumprice} onChange={(e) => setMediumprice(e.target.value)} placeholder="medium varient" />
                    <input className="form-control" type="text" value={largeprice} onChange={(e) => setLargeprice(e.target.value)} placeholder="large varient" />
                    <input className="form-control" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category" />
                    <input className="form-control" type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image url" />
                    <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                    <button type="submit" className="btn mt-3">Edit Pizza</button>
                </form>
            </div>
        </div>
    )
}