import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile, userDetails } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function ProfileScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const updateduserstate = useSelector(state => state.userProfileReducer);
    const { loading: updateloading, success: updatesuccess, error: updateerror } = updateduserstate;

    useEffect(() => {
            const userId = currentUser._id;
            dispatch(userDetails(userId))
            setName(currentUser.name)
            setEmail(currentUser.email)
    }, [])

    function profile() {
        if (password !== confirmPassword) {
            alert("passwords not matched")
        }
        else {
            const user = {
                userId: currentUser._id,
                name,
                email,
                password
            }
            console.log(user);
            dispatch(userProfile(user));
        }
    }

    return (
        <div className="register">
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center mt-2" style={{ fontSize: "25px" }}>Profile</h2>
                    
                    {updateloading && (<Loading />)}
                    {updateerror && (<Error error='Something Eent Wrong' />)}
                    {updatesuccess && (<Success success='Profile Updated Sucessfully' />)}
                    <div>
                        <input style={{height:"30px",fontSize:'15px'}}  type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control " />
                        <input style={{height:"30px",fontSize:'15px'}}  type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control " />
                        <input style={{height:"30px",fontSize:'15px'}}  type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        <input style={{height:"30px",fontSize:'15px'}} type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="form-control" />
                        <button className="btn mt-3 mb-3" onClick={profile}>Update</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
