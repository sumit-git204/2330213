const { v4: uuidv4 } = require("uuid");
const { createLog } = require("../repository/logRepository");

const addLog = ({ stack, level, package: pkg, message }) => {
  if (!stack || !level || !pkg || !message) {
    throw new Error("Missing required fields: stack, level, package, message");
  }

  const log = {
    logID: uuidv4(),
    stack,
    level,
    package: pkg,
    message,
    createdAt: new Date().toISOString(),
  };

  createLog(log);
  return { logID: log.logID, message: "log created successfully" };
};

module.exports = { addLog };
