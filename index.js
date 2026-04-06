const { createServer } = require('node:http');
const fs = require('fs');

const HOST = '127.0.0.36';
const PORT = 3000;

const server = createServer((req, res) => {
    if(req.url === '/time') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync('time.html'));
    }
});

server.listen(PORT, HOST, () => console.log(`Server running on: http://${HOST}:${PORT}`));