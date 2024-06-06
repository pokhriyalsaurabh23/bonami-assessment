const prisma = require('../utils/prismaClient');

async function createUser(name, email, gender) {
    return prisma.user.create({
        data: { name, email, gender },
    });
}

async function getUserByEmail(email) {
    return prisma.user.findUnique({
        where: { email },
    });
}

module.exports = {
    createUser,
    getUserByEmail,
};
