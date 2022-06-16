const mongoose = require('mongoose');
const express = require('express');
const userRouter = express.Router();
const userController = require('./userController');


userRouter.post('/', userController.createUser);
userRouter.get('/', userController.showAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/post/:id', userController.getPostByUserId)
userRouter.put('/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;