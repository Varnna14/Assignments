 const http=require("http");
 const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Welcome to My Website</h1><h1>Welcome to My Website</h1>
        <p>This is a simple mini website built using Node.js.</p>
        <p>Explore different sections of the website:</p>
        <ul>
            <li>About - Learn more about us</li>
            <li>Services - See what we offer</li>
            <li>Contact - Get in touch with us</li>
        </ul>
        <p>We are learning backend development and building real-world projects.</p>`);
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>About Us</h1><p>Welcome to our website! This is a simple Node.js backend project created as part of a Full Stack Web Development internship.</p><p>We aim to build efficient and scalable web applications using modern technologies like Node.js, React, and databases.</p><p>This website demonstrates basic routing, API creation, and dynamic content handling using Node.js.</p><p>Our mission is to continuously learn and improve our development skills by working on real-world projects.</p>");
        res.end();
    }
    else if(req.url==="/services"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Our Services</h1>
        <p>We provide the following services:</p>
        <ul>
            <li><b>Web Development:</b> Building responsive and modern websites using HTML, CSS, and JavaScript.</li>    
            <li><b>Frontend Development:</b> Creating interactive user interfaces using React.</li>          
            <li><b>Backend Development:</b> Developing server-side applications using Node.js.</li>
            <li><b>Database Management:</b> Working with databases like MySQL and MongoDB.</li>
            <li><b>API Development:</b> Creating REST APIs for web and mobile applications.</li>
        </ul>
        <p>We focus on delivering high-quality and user-friendly applications.</p>`);
        res.end();
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Contact Us</h1><p>If you have any questions or want to get in touch, feel free to contact us.</p>");
        res.end();
    }   
    else if(req.url==="/time"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Current Time${new Date()}</>`);
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