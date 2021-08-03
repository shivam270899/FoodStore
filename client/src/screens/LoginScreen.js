import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsers } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate;

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = "/"
        }
    }, [])

    function login() {
        const user = {
            email,
            password
        }
        console.log(user);
        dispatch(loginUsers(user));
    }
    return (
        <div className="login">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading/>)}
                    {error && (<Error error="Invaild Credentials"/>)}

                    <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>Login</h2>
                    <div>
                        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control " />
                        <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        <button className="btn mt-3 mb-3" onClick={login}>Login</button>
                        <br />
                        <a style={{ color: 'black' }} href='/register'>Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}