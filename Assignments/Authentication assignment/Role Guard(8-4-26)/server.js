const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { connect } = require('mongoose');
dotenv.config(); 
connectDB();
const app = express();
app.use(express.json());
app.use('/api/authr', require('./routes/authRoutes'));
app.use('/api', require('./routes/protectedRoutes'));
app.get('/', (req, res) => {
    res.send('Role Guard API Running...');
}  );
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
