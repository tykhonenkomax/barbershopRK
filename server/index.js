const express = require ('express');
const dotenv = require ('dotenv').config();
const mongoose = require ('mongoose');
const cors = require ('cors');
const cookieParser = require ('cookie-parser');
const authRoute = require('./routes/auth')
const appointmentRoute = require('./routes/appointment')
const usersRoute = require('./routes/users')
const fileUpload = require('express-fileupload')
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(fileUpload({}))
app.use(express.static('static'))

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/appointment", appointmentRoute);

const connect = async () => {
    try {
        await mongoose.connect(process.env.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect to MongoDB.");
    }catch(error){
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

const PORT = process.env.serverPort || 8800
app.listen(PORT, () => {
    connect();
    console.log(`Connected to Server, Port: ${PORT}`);
});
