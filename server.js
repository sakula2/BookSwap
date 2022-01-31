const express = require('express')
const connectDB = require('./config/db');
const app = express();
//connect database
connectDB();

app.get('/',(req,res)=> res.send('test api'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
