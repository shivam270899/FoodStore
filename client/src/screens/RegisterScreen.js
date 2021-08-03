import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUsers } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const registerstate = useSelector(state => state.registerUserReducer)
    const {loading, error, success} = registerstate;

    function register(){
        if(password !== confirmPassword){
            alert("passwords not matched")
        }
        else{
            const user = {
                name,
                email,
                password,
            }
            console.log(user);
            dispatch(registerUsers(user));
        }
    }

    return (
        <div className="register">
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading/>)}
                    {error && (<Error error="Email Alreday exist"/>) }
                    {success && (<Success success=" User Registered Sucessfully"/>)}

                    <h2 className="text-center mt-2" style={{ fontSize: "25px" }}>Register</h2>
                    <div>
                        <input style={{height:"30px",fontSize:'15px'}}  type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control " />
                        <input style={{height:"30px",fontSize:'15px'}}  type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control " />
                        <input style={{height:"30px",fontSize:'15px'}}  type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        <input style={{height:"30px",fontSize:'15px'}}  type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="form-control" />
                        <button className="btn mt-3 mb-3" onClick={register}>Register</button>
                        <br/>
                        <a style={{color:'black'}} className="mt-2" href='/login'>Click Here To Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}