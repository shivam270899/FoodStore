import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';


export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded navbar-custom">
                <a className="navbar-brand" href="/">FOOD STORE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i style={{color:'black'}} className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item ">
                            {
                                currentUser ?
                                (
                                    <div className="dropdown mt-2">
                                    <a style={{color:'black'}} className="dropdown-toggle text-decoration-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      {currentUser.name}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item" href="/order">Orders</a>
                                      <a className="dropdown-item" href="/profile">Profile</a>
                                      <a className="dropdown-item" onClick={() => {dispatch(logoutUser())}}><li>Logout</li></a>
                                    </div>
                                  </div>
                                  )
                                    : (<a className="nav-link" href="/login">Login</a>)
                            }

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}