import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteUser } from '../actions/userActions';
import { getAllUsers } from '../actions/userActions';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function UserlistScreen(){
    AOS.init()
    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const {loading, error, users} = usersstate

    useEffect(() => {
        dispatch(getAllUsers());
    },[])

    return (
        <div>
            <br/>
            <h1>User List</h1>
            <br/>
            {loading && (<Loading/>)}
            {error && (<Error error='something went wrong'/>)}
            <div>
                <table className="table table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded table-responsive-sm" data-aos="zoom-in">
                <thead  className="thead-dark">
                    <tr>
                        <td>User Id</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>IsAdmin</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin.toString()}</td>
                            <i className="fa fa-trash mt-3 ml-4" onClick={() => {dispatch(deleteUser(user._id))}}></i>
                        </tr>
                    })}
                </tbody>
                </table>
            </div>
        </div>
    )
}