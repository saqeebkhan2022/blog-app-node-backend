require("dotenv").config();
require("./config/database_config").connect();
const authRoute = require("./Router/auth.route")
const postRoute = require('./Router/post.route')
const commentRoute = require('./Router/comment.route')
const categoryRoute = require('./Router/category.route')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(express.json())
app.use(bodyParser.json())

app.use('/', postRoute);
app.use('/', commentRoute);
app.use('/', categoryRoute);

module.exports= app;
