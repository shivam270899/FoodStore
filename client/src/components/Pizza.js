import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartAction';

export default function Pizza({ pizza }) {

    AOS.init();

    const [qty, setQty] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    function addtocart() {
        dispatch(addToCart(pizza, qty, varient));
    }

    return (
        <div style={{ margin: "40px" }} data-aos="zoom-in" className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <p>{pizza.name}</p>
                <img src={pizza.image} className="img-fluid" style={{ height: "120px", width: "120px" }}></img>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select style={{height:'30px',fontSize:'12px'}} className="form-control" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select style={{height:'30px',fontSize:'12px'}} className="form-control" value={qty} onChange={(e) => { setQty(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <p className="m-1" style={{fontSize:'15px'}}>Price:{pizza.prices[0][varient] * qty}/-</p>
                </div>
                <div className="m-1 w-100">
                    <button className="btn btn-primary btn-sm" style={{fontSize:'12px'}} onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: "100px"}}></img>
                   <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}