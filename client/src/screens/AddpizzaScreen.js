import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../actions/pizzaAction';
import Error from '../components/Error';
import Success from '../components/Success';
import Loading from '../components/Loading';

export default function AddpizzaScreen(){
    const [name, setName] = useState("");
    const [smallprice, setSmallprice] = useState("");
    const [mediumprice, setMediumprice] = useState("");
    const [largeprice, setLargeprice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const addpizzastate = useSelector(state=> state.addPizzaReducer)
    const {loading, success, error} = addpizzastate;

    function formHandler (e){
        e.preventDefault();
        const pizza = {
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
        console.log(pizza);
        dispatch(addPizza(pizza));
    }

    return (
        <div>
            <br/>
            <h1>Add Pizza</h1>
            <br/>
            {loading && <Loading/>}
            {error && <Error error='something went wrong'/>}
            {success && <Success success='Pizza Added Successfully'/>}
            <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <form onSubmit={formHandler}>
                    <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                    <input className="form-control" type="text" value={smallprice} onChange={(e)=>setSmallprice(e.target.value)} placeholder="small Varients"/>
                    <input className="form-control" type="text" value={mediumprice} onChange={(e)=>setMediumprice(e.target.value)} placeholder="medium varient"/>
                    <input className="form-control" type="text" value={largeprice} onChange={(e)=>setLargeprice(e.target.value)} placeholder="large varient"/>
                    <input className="form-control"type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="category"/>
                    <input className="form-control"type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="image url"/>
                    <input className="form-control" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="description"/>
                    <button type="submit" className="btn mt-3">ADD pIZZA</button>
                    </form>
            </div>
        </div>
    )
}