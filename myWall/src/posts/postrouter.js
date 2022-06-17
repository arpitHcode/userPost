const mongoose = require('mongoose');
const express = require('express');
const postRouter = express.Router();
const postController= require('./postcontroller');


postRouter.post('/' , postController.createPost);
postRouter.get('/' , postController.showAllPost);
postRouter.get('/:id' , postController.getPostById);
postRouter.get('/user/:id' ,postController.getPostByUser );
postRouter.put('/:id' , postController.updatePostById);
postRouter.delete('/:id' , postController.deletePostById);    

module.exports = postRouter;