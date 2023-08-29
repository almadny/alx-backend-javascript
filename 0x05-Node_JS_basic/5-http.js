const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      const file = process.argv[2];
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
	  res.write('This is the list of our students\n');	
          res.write(`Number of students: ${lines.length}\n`);
          // eslint-disable-next-line guard-for-in
          for (const field in studentsByField) {
            const result =`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
	    const n_result = result.trim('\n');
            res.write(n_result);
          }
          res.end();
        })
        .catch(() => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 500;
          res.write('Cannot load the database');
          res.end();
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
