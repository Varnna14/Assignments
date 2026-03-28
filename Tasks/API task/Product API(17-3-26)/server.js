const express = require("express");
const logger = require("./middleware/logger");
const productRouters = require("./routes/ProductRouters");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(logger);
app.use("/products", productRouters);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});