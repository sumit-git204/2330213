const express = require("express");
const config = require("./config");
const { requestLogger, errorHandler } = require("./middleware");
const notificationRoute = require("./route/notificationRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Routes
app.use("/", notificationRoute);

// Error handler (must be last)
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`notification_app_be running on port ${config.port}`);
});

module.exports = app;
