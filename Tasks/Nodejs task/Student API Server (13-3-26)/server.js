const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/students"){
        res.writeHead(200,{"Content-Type":"application/json"});
        const students=[
            {name:"Amit",course:"AI"},
            {name:"Riya",course:"Full Stack"},
            {name:"Rahul",course:"Data Science"}
        ];
        res.write(JSON.stringify(students));
        res.end();
}
    else if(req.url==="/courses"){
        res.writeHead(200,{"Content-Type":"application/json"});
        const courses=["AI","Full Stack","Data Science"];
        res.write(JSON.stringify(courses));
        res.end();  
    }
    else if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Welcome to the Student and Course API</h1>");
        res.end();
    }
     else{
            res.writeHead(404,{"Content-Type":"text/html"});
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
 });