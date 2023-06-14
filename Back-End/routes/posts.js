const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
 // Assuming you have a Image model
router.use(bodyParser.json());
const Post = require('../models/Post');

// GET all posts

router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        if (!post) {
            throw new Error('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.json({message: error.message});
    }
});


// POST a post
const upload  = require('../middleware/upload');

router.post('/', upload, async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        writerId: req.body.writerId,
        date: req.body.date? req.body.date : Date.now(),
        readTime: req.body.readTime,
    });
    if (req.file) {
        post.image = req.file.path;
    }
    console.log(post);
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({message: error});
    }
    
});

router.get('/:writerId', async (req, res) => {
    try {
        const post = await Post.find({writerId: req.params.writerId});
        if (!post) {
            throw new Error('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.json({message: error.message});
    }
});


router.get('/info/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new Error('Post not found');
        }
        res.json(post);
    } catch (error) {
        res.json({message: error.message});
    }
});



module.exports = router;