const commentService = require('../services/commentservice');

async function createComment(req, res) {
    try {
        const { text, authorId } = req.body;
        const comment = await commentService.createComment(text, authorId);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createReply(req, res) {
    try {
        const { text, authorId, parentId } = req.body;
        const reply = await commentService.createReply(text, authorId, parentId);
        res.status(201).json(reply);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getCommentsByUser(req, res) {
    try {
        const comments = await commentService.getCommentsByUser(req.params.userId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getReplies(req, res) {
    try {
        const replies = await commentService.getReplies(req.params.commentId);
        res.json(replies);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateComment(req, res) {
    try {
        const { text } = req.body;
        const comment = await commentService.updateComment(req.params.id, text);
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteComment(req, res) {
    try {
        await commentService.deleteComment(req.params.id);
        res.json({ message: 'Comment deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createComment,
    createReply,
    getCommentsByUser,
    getReplies,
    updateComment,
    deleteComment,
};
