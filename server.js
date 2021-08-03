const express = require("express");
const app = express();
const db = require('./db');
const Pizza = require('./models/pizzaModel');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const path = require('path');

const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders', ordersRoute);

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}


const port = process.env.PORT || 8000;

app.listen( port , () => console.log("server is running on " +port));
