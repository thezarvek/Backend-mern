import http from 'http'

const server = http.createServer((req , res)=>{
    res.end("Subscribe to CodeNook");
});

server.listen(3000);