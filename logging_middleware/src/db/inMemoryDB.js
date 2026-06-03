// In-memory store for logs 
const logs = [];

const saveLog = (log) => {
  logs.push(log);
};

const getAllLogs = () => logs;

module.exports = { saveLog, getAllLogs };
