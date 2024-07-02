const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();



// importing routes

const user = require("./Routes/userRoute");


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// route bind

app.use("/", user);

app.listen(process.env.PORT, () => console.log("app is running"));