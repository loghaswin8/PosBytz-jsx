const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const bcrypt = require('bcryptjs');

const router = express.Router();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.get('http://localhost:5000/api/users');
    const users = response.data;

    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }
    console.log(email)
    console.log(user.password)

    console.log(password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    // JWT token
    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

router.post('/login', loginUser);

module.exports = router;
