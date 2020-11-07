var http = require("http");

const httpServer = http.createServer(handleServer)


function handleServer(req, res) {

    if(req.url === '/welcome'){
        res.write('Welcome to Dominos!');
        res.end();
    }
    if(req.url === '/contact'){
        let obj = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            };
        res.write(JSON.stringify(obj));
        res.end();
    }
    else{
        res.writeHead(404);
        res.write("404");
        res.end(); 
    }
  
}

module.exports = httpServer;