const express = require('express');
const commentController = require('../controllers/commentcontroller');

const router = express.Router();

router.post('/comment', commentController.createComment);
router.post('/reply', commentController.createReply);
router.get('/comments/:userId', commentController.getCommentsByUser);
router.get('/replies/:commentId', commentController.getReplies);
router.put('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;
