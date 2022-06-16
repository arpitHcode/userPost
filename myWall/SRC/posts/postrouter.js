const mongoose = require('mongoose');
const express = require('express');
const postRouter = express.Router();
const postController= require('./postcontroller');


postRouter.post('/:id' , postController.createPost);
postRouter.get('/' , postController.showAllPost);
postRouter.get('/:id' , postController.getPostById);
postRouter.get('/comment/:id' ,postController.getCommentById )
postRouter.put('/:id' , postController.updatePostById);
postRouter.delete('/:id' , postController.deletePostById);    

module.exports = postRouter;