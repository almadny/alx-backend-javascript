const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

const hostname = '127.0.0.1';
const port = 1245;

app.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});

module.exports = app;
