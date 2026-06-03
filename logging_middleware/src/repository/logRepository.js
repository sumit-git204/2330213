const { saveLog, getAllLogs } = require("../db/inMemoryDB");

const createLog = (logData) => {
  saveLog(logData);
  return logData;
};

const fetchAllLogs = () => getAllLogs();

module.exports = { createLog, fetchAllLogs };
