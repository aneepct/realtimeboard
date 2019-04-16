const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');
const validatePostInput = require("../../validation/post");


/**
 * @route Post /api/post
 * @description Create post | returning post object or error
 * @access Public
 */
router.post('/create', (req, res) => {

  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    name: req.body.name,
    details: req.body.email,
    media: req.body.media
  });

  newPost
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});


/**
 * @route GET /api/post/all
 * @description GET all posts
 * @access Private
 */
router.get('/all/:total_posts', (req, res) => {
    const errors = {};
    let total_posts = parseInt(req.params.total_posts);

    // Query Params
    let queryParams = {};

    let ids = [];
    if(req.body.postIds && req.body.postIds != "") {
        ids = req.body.postIds.split(",");
        queryParams._id = { $in: ids };
    }
    if(req.body.startDate && req.body.endDate) {
        queryParams.date = { $gt: req.body.startDate, $lt: req.body.endDate };
    }

    // Post query
    let postQuery = Post.find(queryParams);

    postQuery
      .skip(0).limit(total_posts)
      .select(['name', 'details', 'media', 'date'])
      .then(posts => {
        if(!posts || posts.length === 0) {
          errors.noprofile = 'There are no posts.';
          return res.status(404).json(errors);
        }
        res.json(posts);
      })
      .catch(err => 
        res.status(400).json({ posts: 'There are no posts.'}) 
      )
  });

 /**
 * @route GET /api/post/search_by_name
 * @description Search posts by name
 * @access Public
 */
router.get('/search_by_name/:search_string', (req, res) => {
    const errors = {}

    Post.find().where('name').regex(new RegExp(req.params.search_string, 'i'))
        .select(['name', 'details', 'media', 'date'])
        .then(posts => {
            if(!posts) {
                errors.noprofile = 'There are no posts.';
                return res.status(404).json(errors);
            }
            res.json(posts);
        })
        .catch(err => 
            res.status(400).json({ posts: 'There are no posts.' })
        )
});
 
module.exports = router;