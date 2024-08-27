const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await sequelize.sync();  // This ensures all models are synced with the database
    console.log('Database synced!');
});