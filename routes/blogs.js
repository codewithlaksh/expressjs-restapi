const express = require('express')
const router = express.Router();
const Blogs = require('../models/Blogs')

router.get('/', async (req, res) => {
    let blogs = await Blogs.find({})
    if (blogs.length === 0) {
        res.status(404).json({ message: "No blogs are found found!" })
    } else {
        res.status(200).json({ status: 200, blogs: blogs });
    }
})

router.get('/:slug', async (req, res) => {
    let blog = await Blogs.findOne({ slug: req.params.slug });
    if (!blog) {
        res.status(404).json({ message: "No such blog was found!" })
    } else {
        res.status(200).json({ status: 200, blog: blog });
    }
    
})

module.exports = router;