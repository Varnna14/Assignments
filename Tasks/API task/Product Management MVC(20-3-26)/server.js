const express = require('express');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(express.json());
app.use(logger);
app.use("/products", productRoutes);
app.get('/', (req, res) => {
    res.send("product MVC API is running");
});
app.use(errorHandler);
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});