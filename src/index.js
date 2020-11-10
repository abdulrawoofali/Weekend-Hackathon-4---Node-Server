var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {

    if(req.url === "/welcome"){
        res.write('Welcome to Dominos!');
        res.end();
        return;
    }
    if(req.url === "/contact"){
        let obj = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            };
  
        res.write(JSON.stringify(obj));
        res.end();
        return;
    }
    
        res.writeHead(404, {'Content-Type': 'text/html'});
        //res.writeHead(404);
        res.write("status 404");
        res.end(); 
    return;
  
}

module.exports = httpServer;
