const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(cors());

// connect to the mongodb database
connectDB() 
const itemsRoute = require("./routes/items")
const paymentRoute = require("./routes/payment")

app.use('/items', itemsRoute)
app.use('/payments', paymentRoute )

app.use('/',(req,res)=>{
    res.json("Backend Running")
})

app.listen(PORT, console.log("Server is running on port ", PORT))