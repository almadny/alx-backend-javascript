const http = require('http');
const fs = require('fs').promises;

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      const file = process.argv.length > 2 ? process.argv[2] : '';
      fs.readFile(file, 'utf8')
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
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.write(`Number of students: ${lines.length}\n`);
          res.write('This is the list of our students\n');
          let result = '';
          // eslint-disable-next-line guard-for-in
          for (const field in studentsByField) {
            result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;

          // res.write(result);
          }
          const newResult = result.trim();
          res.end(newResult);
        })
        .catch((err) => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.write('This is the list of our students\n');
          res.end('Cannot load the database');
        });
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }
});

const hostname = '127.0.0.1';
const port = 1245;

app.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});

module.exports = app;
