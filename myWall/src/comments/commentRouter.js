const mongoose = require('mongoose');
const express = require('express');
const commentRouter = express.Router();
const commentController = require('./commentController');


commentRouter.post('/', commentController.createComments);
commentRouter.get('/', commentController.showAllComments);
commentRouter.get('/:id', commentController.getCommentById);
commentRouter.get('/post/:id', commentController.getCommentByPost);
commentRouter.get('/user/:id', commentController.getCommentByUser);
commentRouter.put('/:id', commentController.updateCommentById);
commentRouter.delete('/:id', commentController.deleteCommentById);

module.exports = commentRouter;