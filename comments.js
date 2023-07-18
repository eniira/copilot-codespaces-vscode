// Create web server

// Import express
const express = require('express');

// Import comment controller
const commentController = require('../controllers/commentController');

// Create router
const router = express.Router();

// Handle requests to /comments
router.get('/', commentController.comment_list_get);

// Handle requests to /comments/:id
router.get('/:id', commentController.comment_get);

// Handle requests to /comments
router.post('/', commentController.comment_post);

// Handle requests to /comments/:id
router.put('/:id', commentController.comment_put);

// Handle requests to /comments/:id
router.delete('/:id', commentController.comment_delete);

// Export router
module.exports = router;