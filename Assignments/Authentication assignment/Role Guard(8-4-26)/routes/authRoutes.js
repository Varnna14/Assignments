const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashed=await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashed, role });
    await user.save();
    res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' });
    const token = jwt.sign({ userId: user._id, role: user.role }, 
        process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;