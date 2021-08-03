const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    const newUser = new User({ name, email, password });
    try {
        await newUser.save();
        console.log(newUser);
        res.send('user register suceessfully');
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password === req.body.password) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin
                })
                return;
            }
            else {
                return res.status(400).json({ message: 'invalied  password' });
            }
        } else {
            return res.status(400).json({ message: 'invalied email & password' });
        }
    }
    catch (error) {
        return res.status(400).json({ message: 'user login failed' });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.send(user);
        } else {
            return res.status(400).json({ message: 'user not found' })
        }
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
})

router.put('/updateprofile', async (req, res) => {
    const { name, email, password, userId } = req.body
    try {
        const user = await User.findById(userId);
        if (user) {
            user.name = name || user.name
            user.email = email || user.name
            user.password = password || user.password

            const updatedUser = await user.save();
            res.send(updatedUser);
        } else {
            return res.status(400).json({ message: 'User Not Found' })
        }
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
});

router.post('/getallusers', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users);
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/deleteuser', async(req, res) => {
    const userid = req.body.userid;
    try{
        await User.findOneAndDelete({_id: userid})
        res.send('user deleted')
    }
    catch(error){
        return res.status(400).json({ message: error })
    }
})


module.exports = router;