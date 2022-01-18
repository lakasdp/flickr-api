require("dotenv").config()
const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[Server] Running on Port http://localhost:${port}`)
});

// Route Modules Import
const pictures = require("./routes/pictures");

// Use Routes
app.use("/pictures", pictures);


