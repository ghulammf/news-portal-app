import express from "express";
import userController from "../controllers/user.controller.js";
import publicPostController from "../controllers/public-post.controller.js";

const publicRoute = express.Router();

// Auth API
publicRoute.post('/api/users/register', userController.register);
publicRoute.post('/api/users/login', userController.login);
publicRoute.post('/api/users/logout', userController.logout)

// Post API
publicRoute.get('/', function (req, res) {
    res.status(200).json("Home page")
});
publicRoute.get('/posts', publicPostController.getAll);
publicRoute.get('/posts/:slug', publicPostController.getItem);
publicRoute.get('/posts/categories/:category', publicPostController.getByCategory);
publicRoute.get('/posts/authors/:author', publicPostController.getByAuthor)

export default publicRoute;