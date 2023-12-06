const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact');
const paperRouter = require('./routes/paper');

dotenv.config();
const url = process.env.MONGO_URI;
mongoose.connect(url);
const con = mongoose.connection;

con.on('open', () => {
    console.log("Connected to the MongoDB database");
});

app.use(cors());
app.use(express.json());

app.use('/api', contactRouter);
app.use('/api', paperRouter);

app.listen(9000, () => {
    console.log("Connected to port 9000");
});
