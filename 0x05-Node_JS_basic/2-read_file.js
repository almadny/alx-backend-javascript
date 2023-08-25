const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const allLines = fileContent.split('\n').filter((line) => line.trim() !== '');

    if (allLines.length === 0) {
      throw new Error('No student data found in the database');
    }

    const studentsByField = {};
    const lines = allLines.slice(1);
    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    console.log(`Number of students: ${lines.length}`);
    // eslint-disable-next-line guard-for-in
    for (const field in studentsByField) {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
