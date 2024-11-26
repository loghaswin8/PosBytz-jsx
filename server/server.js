const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const navbarController = require('./modules/navbar/controller');
const footerController = require('./modules/footer/controller'); 
const homeController = require('./modules/home/controller');
const aboutController = require('./modules/about/controller');
const contactController = require('./modules/contact/controller');
const supportController = require('./modules/support/controller');
const careerController = require('./modules/career/controller');
const registerController = require('./modules/register/controller');
const loginController = require('./modules/login/controller');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Register routes
app.use('/api/navbar', navbarController); 
app.use('/api/footer', footerController);
app.use('/api/home', homeController);
app.use('/api/about', aboutController);
app.use('/api/contact', contactController);
app.use('/api/support', supportController);
app.use('/api/career', careerController);
app.use('/', registerController);
app.use('/api/', loginController);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
