//express app
const express = require('express');
const app = express();

//mongdb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyWall');

//middle-wares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//Userrouter
const userRouter = require('./users/userRouter');
app.use('/user', userRouter);

//postRouter
const postRouter = require('./posts/postrouter');
app.use('/post', postRouter);

//commentRouter
const commentRouter = require('./comments/commentRouter');
app.use('/comment', commentRouter);

//server
app.listen(3000, (req, res) => {
    console.log("app running at port 3000");
});
