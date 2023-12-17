const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/MiniProject")
        console.log("Mongo DB Connected: ")
    }
    catch(err) {
        console.log("conn err")
        process.exit(1)
    }
}

module.exports = connectDB