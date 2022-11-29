const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb connected`);
    }catch(error) {
        console.log(`Connection to the DB failed : ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB


// Use this function to connect to MongoDb and start the server at server.js 

// const startServer = async () => {
//     try {
//         await connectDB()
        
//     } catch (error) {
//         console.log(`Failed to start server: ${error}`);
//     }
// }

// startServer()