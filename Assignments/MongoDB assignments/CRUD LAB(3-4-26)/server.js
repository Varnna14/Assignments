const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is working");
});

const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});