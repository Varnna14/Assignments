const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-Type":
            "text/plain"});
            res.end("Welcome to my Node Server");
        }
        else if(req.url=="/about"){
            res.writeHead(200,{"content-Type":
            "text/plain"});
            res.end("This is the about page");
        }
        else if(req.url=="/contact"){
            res.writeHead(200,{"content-Type":
            "text/plain"});
            res.end("This is the contact page");
        }
        else{
            res.writeHead(404,{"content-Type":
            "text/plain"});
            res.end("Page not found");
        }
    });
    const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});