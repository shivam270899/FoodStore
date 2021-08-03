const express = require("express");
const router = express.Router();
const Pizza = require('../models/pizzaModel');

router.get('/getallpizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
})

router.post('/addpizza', async (req, res) => {
    const pizza = req.body.pizza
    try {
        const newPizza = new Pizza({
            name: pizza.name,
            image: pizza.image,
            varients: ['small', 'medium', 'large'],
            description: pizza.description,
            prices: [pizza.prices],
            category: pizza.category
        });
        await newPizza.save();
        res.send('pizza added suceessfully');
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post('/getpizzabyid', async (req, res) => {
    const pizzaid = req.body.pizzaid;
    try {
        const pizza = await Pizza.findOne({ _id: pizzaid })
        if (pizza) {
            res.send(pizza);
        } else {
            return res.status(400).json({ message: 'pizza not found' })
        }
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
})


router.put('/updatepizza', async (req, res) => {
    const editedPizza = req.body.editedPizza;
    try {
        const pizza = await Pizza.findOne({ _id: editedPizza._id })
        if (pizza) {
            pizza.name = editedPizza.name || pizza.name
            pizza.category = editedPizza.category || pizza.category
            pizza.description = editedPizza.description || pizza.description
            pizza.image = editedPizza.image || pizza.image
            pizza.prices = [editedPizza.prices] || [pizza.prices]

            await pizza.save();
            res.send('Pizza updated successfully')
        } else {
            return res.status(400).json({ message: 'Pizza Not Found' })
        }
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
});

router.post('/deletepizza', async (req, res) => {
    const pizzaid = req.body.pizzaid
    try {
        const pizza = await Pizza.findByIdAndDelete({_id: req.body.pizzaid})
        res.send('pizza deleted successfully')
    }
    catch (error) {
        return res.status(4004).send({ message: error })
    }

})


module.exports = router;
