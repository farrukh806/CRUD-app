const blogController = require('../controllers/blog');
const Router = require('express').Router();

Router.get('/', blogController.getBlogs);
Router.get('/blogs/new', blogController.newBlog);
Router.get('/blogs/:id', blogController.getBlogById);
Router.post('/blogs', blogController.createNewBlog);
Router.get('/blogs/:id/edit', blogController.editBlogById);
Router.put('/blogs/:id/', blogController.updateBlogById);
Router.delete('/blogs/:id', blogController.deleteBlogById);

module.exports = Router;
