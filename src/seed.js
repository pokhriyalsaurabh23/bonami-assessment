const prisma = require('./utils/prismaClient');

async function main() {
  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      comments: {
        create: [
          { text: 'Hello, world!' }
        ]
      }
    }
  });

  console.log('Seed data created');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
