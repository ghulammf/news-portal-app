import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import postController from '../controllers/post.controller.js';
import uploadFile from '../utils/upload.js';

const route = new express.Router();

route.get('/dashboard', authMiddleware, function (req, res) {
    res.json("Dashboard Page");
})

// Post API
//route.get('/verify', authMiddleware)
route.post('/api/posts', authMiddleware, uploadFile.single('image'), postController.create);
route.get('/api/posts', authMiddleware, postController.getAll);
route.get('/api/posts/:slug', authMiddleware, postController.getItem);
route.put('/api/posts/:slug', authMiddleware, uploadFile.single('image'), postController.update);
route.delete('/api/posts/:slug', authMiddleware, postController.delete);

export default route;