const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
const User = require('../models/User');

// GET all users

router.get('/', async (req, res) => {
    try {
        const Users = await User.find();
        res.json(Users);
    } catch (error) {
        res.json({message: error});
    }
});

// POST a user
const upload = require('../middleware/upload');
router.post('/', upload,async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        
    });
    if (req.file) {
        user.avatar = req.file.filename;
    }
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new Error('User not found');
        }
        res.json(user);
    } catch (error) {
        res.json({message: error.message});
    }
});
router.get('/name/:username', async (req, res) => {
    console.log(req.params.id);
    try {
        const user = await User.findOne({username: req.params.username});
        if (!user) {
            throw new Error('User not found');
        }
        res.json(user);
    } catch (error) {
        res.json({message: error.message});
    }
});


module.exports = router;