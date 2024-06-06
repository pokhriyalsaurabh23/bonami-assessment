const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config({ path: './.env' });

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', commentRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
