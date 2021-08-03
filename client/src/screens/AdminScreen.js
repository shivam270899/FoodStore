import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import AddpizzaScreen from './AddpizzaScreen';
import OrderlistScreen from './OrderlistScreen';
import PizzalistScreen from './PizzalistScreen';
import UserlistScreen from './UserlistScreen';
import EditpizzaScreen from './EditpizzaScreen';

export default function AdminScreen() {
    const dispatch = useDispatch();
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
            <div className="row justify-content-center">
                <div className="col-md-10">
                <p className="" style={{ fontSize: '25px' }}>Admin Screen</p>
                    <ul className="adminfunction">
                        <li><Link to="/admin/userlist">User List</Link></li>
                        <li><Link to="/admin/orderlist">Order List</Link></li>
                        <li><Link to="/admin/addpizza">Add Pizza</Link></li>
                        <li><Link to="/admin/pizzalist">Pizza List</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/admin/" component={UserlistScreen} exact></Route>
                        <Route path="/admin/userlist" component={UserlistScreen}></Route>
                        <Route path="/admin/orderlist" component={OrderlistScreen}></Route>
                        <Route path="/admin/pizzalist" component={PizzalistScreen}></Route>
                        <Route path="/admin/addpizza" component={AddpizzaScreen}></Route>
                        <Route path="/admin/editpizza/:pizzaid" component={EditpizzaScreen}></Route>
                    </Switch>
                </div>
            </div>
    )
}