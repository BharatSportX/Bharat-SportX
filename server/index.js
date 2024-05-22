const express = require("express");
const app = express();
const PORT = 8745;


app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
