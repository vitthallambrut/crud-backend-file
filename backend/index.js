
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://127.0.0.1/Courses",{useUnifiedTopology: true, useNewUrlParser: true },()=> console.log("Connected to db"));

// import routes
const courseRouting = require("./routes/coursepost");
const userRouter = require("./routes/user");

//middleware
app.use(express.json());
app.use(cors());

// routes middleware
app.use("/api/coursespost",courseRouting);
app.use("/api/user", userRouter);

app.listen(5000, ()=> console.log("server run on port 5000!"));
