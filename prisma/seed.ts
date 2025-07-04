// @author madebycm (2025)
// Database seed script to create initial admin user
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash('123', 10);
  
  // Create or update the dev user
  const devUser = await prisma.user.upsert({
    where: { username: 'dev' },
    update: {},
    create: {
      username: 'dev',
      email: 'dev@example.com',
      password: hashedPassword,
      role: 'admin',
    },
  });
  
  console.log('Created dev user:', devUser);
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