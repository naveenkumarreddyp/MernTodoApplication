const dotenv = require('dotenv').config()
const express = require('express');
const connectDB = require("./config/connectDB");
const Todo = require('./model/TodoModel')
const todoRoutes = require('./routes/routes')
const cors = require('cors')

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:3000/", "https://naveen-todo-app.onrender.com"]
}))
// app.use(cors())
app.use(todoRoutes)
// Routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000
const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startServer()
