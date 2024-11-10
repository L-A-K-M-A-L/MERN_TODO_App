require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');

const  userRoutes  = require('./routes/userRoutes');
const taskRoutes =  require('./routes/TaskRoute');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    credentials: true  
}));

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/', taskRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Server running on PORT = ${PORT}`);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


