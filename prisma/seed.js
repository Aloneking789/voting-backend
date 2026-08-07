import bcrypt from 'bcryptjs';
import xlsx from 'xlsx';
import path from 'path';
import { prisma } from '../src/config/prisma.js';

const splitFullName = (fullName) => {
  if (!fullName) return { firstName: '', middleName: null, lastName: null };
  const parts = String(fullName).trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], middleName: null, lastName: null };
  } else if (parts.length === 2) {
    return { firstName: parts[0], middleName: null, lastName: parts[1] };
  } else {
    return {
      firstName: parts[0],
      middleName: parts.slice(1, -1).join(' '),
      lastName: parts[parts.length - 1]
    };
  }
};

const parseDOB = (dobVal) => {
  if (!dobVal) return null;
  if (dobVal instanceof Date) return dobVal;
  
  const str = String(dobVal).trim();
  const parts = str.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const d = new Date(Date.UTC(year, month, day));
    if (!isNaN(d.getTime())) return d;
  }
  
  const parsed = new Date(str);
  return isNaN(parsed.getTime()) ? null : parsed;
};

async function main() {
  console.log('Seeding initial database data...');

  // 1. Seed Admin
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

  // 2. Seed Students from Excel
  const excelPath = path.join(process.cwd(), 'International Delhi Public School.xlsx');
  console.log(`Reading students from Excel file: ${excelPath}`);
  
  const workbook = xlsx.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const studentsRaw = xlsx.utils.sheet_to_json(worksheet, { range: 1, defval: '' });

  console.log(`Found ${studentsRaw.length} student rows in Excel. Starting seed...`);

  let seededCount = 0;
  for (const row of studentsRaw) {
    const studentId = String(row['Student ID'] || '').trim();
    const admissionId = String(row['Adm No'] || '').trim();
    
    if (!studentId || !admissionId) {
      console.warn(`Skipping invalid row: Student ID or Adm No is empty.`, row);
      continue;
    }

    const fullName = String(row['Full Name'] || row['Student First Name'] || '').trim();
    const { firstName, middleName, lastName } = splitFullName(fullName);

    const fatherName = String(row['Father'] || '').trim() || null;
    const motherName = String(row['Mother'] || '').trim() || null;
    
    const contactMobile = String(row['Contact'] || '').trim() || null;
    const phoneMobile = String(row['Phone'] || '').trim() || null;
    const emergencyMobile = String(row['Emergency'] || '').trim() || null;
    
    const email = String(row['Email'] || '').trim() || null;
    const gender = String(row['Gender'] || '').trim() || null;
    const dob = parseDOB(row['DOB']);
    
    const className = String(row['Class'] || '').trim() || null;
    const section = String(row['Section'] || '').trim() || null;
    
    const address = String(row['Address'] || '').trim() || null;
    const bloodGroup = String(row['Blood'] || '').trim() || null;
    const religion = String(row['Religion'] || '').trim() || null;
    const nationality = String(row['Nationality'] || '').trim() || null;

    const mappedData = {
      admissionId,
      firstName,
      middleName,
      lastName,
      fatherName,
      motherName,
      mobile: contactMobile,
      fatherMobile: phoneMobile,
      motherMobile: emergencyMobile,
      email,
      gender,
      dob,
      className,
      section,
      address,
      bloodGroup,
      religion,
      nationality
    };

    await prisma.user.upsert({
      where: { studentId },
      update: mappedData,
      create: {
        studentId,
        ...mappedData
      }
    });

    seededCount++;
    if (seededCount % 50 === 0) {
      console.log(`Seeded ${seededCount}/${studentsRaw.length} students...`);
    }
  }

  console.log(`Seeding completed successfully! Total seeded students: ${seededCount}`);
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
