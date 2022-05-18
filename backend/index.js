require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes=require('./routes/index.js')
const helmet=require('helmet')
const compression=require('compression')

app.use(cors());
app.use(helmet())
app.use(compression())
app.get("/", (req, res, next) => {
  res.json({
    message: "Hello from simple server",
  });
});

app.use('/api/post',routes);

app.listen(process.env.PORT||8080, () => {
  console.log("Server is running on port 8080");
});
