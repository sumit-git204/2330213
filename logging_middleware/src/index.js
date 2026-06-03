require("dotenv").config();
const express = require("express");
const logRoute = require("./route/logRoute");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/", logRoute);

app.listen(PORT, () => {
  console.log(`logging_middleware running on port ${PORT}`);
});

module.exports = app;
