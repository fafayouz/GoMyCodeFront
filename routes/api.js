const express = require('express');
const { CreatePost, GetPostsData, DeletePost } = require('../controllers/Posts');



const router = express.Router();
// Adding Post
router.post('/CreatePost' , CreatePost)
//Reading Post
router.get('/GetPosts' , GetPostsData)
//Deleting Post 
router.delete('/DeletePost/:id' , DeletePost)
module.exports = router ;

