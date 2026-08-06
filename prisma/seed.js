import bcrypt from 'bcryptjs';
import { prisma } from '../src/config/prisma.js';

async function main() {
  console.log('Seeding initial database data...');

  const adminEmail = 'admin@school.com';
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('adminpassword123', salt);
    
    await prisma.admin.create({
      data: {
        name: 'Super Administrator',
        email: adminEmail,
        password: hashedPassword,
        role: 'SUPER_ADMIN',
        isActive: true
      }
    });
    
    console.log('Default super admin created successfully:');
    console.log('  Email: admin@school.com');
    console.log('  Password: adminpassword123');
  } else {
    console.log('Super admin account already exists in database.');
  }
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
