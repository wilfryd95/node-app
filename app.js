const http = require('http');
const server = http.createServer((req, res)) => {
    res.end('Hello, Docker!');
});
server.listen(3000);