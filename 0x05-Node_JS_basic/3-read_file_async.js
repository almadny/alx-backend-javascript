const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const allLines = data.split('\n').filter((line) => line.trim() !== '');
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
    })
    .catch(() => {
      console.error('Cannot load the database');
    });
}

module.exports = countStudents;
