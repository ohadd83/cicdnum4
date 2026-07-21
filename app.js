const http = require('http');

http.createServer((req, res) => {
  res.end("Hello Jenkins CI/CD lets move on aaaaaa port 8081");
}).listen(3000);

