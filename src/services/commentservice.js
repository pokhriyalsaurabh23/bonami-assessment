const prisma = require('../utils/prismaClient');

async function createComment(text, authorId) {
    return prisma.comment.create({
        data: { text, authorId },
    });
}

async function createReply(text, authorId, parentId) {
    return prisma.comment.create({
        data: { text, authorId, parentId },
    });
}

async function getCommentsByUser(userId) {
    return prisma.comment.findMany({
        where: { authorId: parseInt(userId) },
    });
}

async function getReplies(commentId) {
    return prisma.comment.findMany({
        where: { parentId: parseInt(commentId) },
    });
}

async function updateComment(commentId, text) {
    return prisma.comment.update({
        where: { id: parseInt(commentId) },
        data: { text },
    });
}

async function deleteComment(commentId) {
    return prisma.comment.delete({
        where: { id: parseInt(commentId) },
    });
}

module.exports = {
    createComment,
    createReply,
    getCommentsByUser,
    getReplies,
    updateComment,
    deleteComment,
};
