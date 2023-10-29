import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Alice',
      password: await hash('12345678', 10),
      lastname: 'Test',
      username: 'userTest',
    },
  });
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
