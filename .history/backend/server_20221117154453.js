const dotenv = re
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')


// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});

// mongodb+srv://joel1234:<password>@joelcluster.ukl1fnk.mongodb.net/?retryWrites=true&w=majority