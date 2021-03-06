var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {

    if (req.url === "/welcome") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("content-Type", "application/json");
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
  } else {
    res.statusCode = 404;
    res.write("Page Not Found");
    res.end();
  }
  
}

module.exports = httpServer;
