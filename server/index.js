const express = require("express");
const app = express();
const PORT = 8745;
const connectDB=require('./db/Connection')
const dotenv=require('dotenv')
const router=require("./routes/index")
const cookieParser=require('cookie-parser')
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//API Endpoints
app.use('/api',router)
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("Server Running at " + PORT);
  });
}).catch(err => {
  console.error("Failed to connect to the database", err);
});