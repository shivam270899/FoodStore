import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/cart" exact component={CartScreen}></Route>
        <Route path="/register" exact component={RegisterScreen}></Route>
        <Route path="/login" exact component={LoginScreen}></Route>
        <Route path="/order" exact component={OrderScreen} ></Route>
        <Route path="/profile" exact component={ProfileScreen} ></Route>
        <Route path='/admin' component={AdminScreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
