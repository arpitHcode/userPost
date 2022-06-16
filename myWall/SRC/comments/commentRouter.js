const mongoose = require('mongoose');
const express = require('express');
const commentRouter = express.Router();
const commentController = require('./commentController');


commentRouter.post('/:id', commentController.createComments);
commentRouter.get('/', commentController.showAllComments);
commentRouter.get('/:id', commentController.getCommentById);
commentRouter.put('/:id', commentController.updateCommentById);
commentRouter.delete('/:id', commentController.deleteCommentById);

module.exports = commentRouter;