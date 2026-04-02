const express=require("express");
const app=express();
app.use(express.json());
const bookRoters=require("./routers/books");
const authorRouter=require("./routers/authors");

app.use("/books", bookRoters);
app.use("/authors", authorRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});