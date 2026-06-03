const { addLog } = require("../service/logService");

const createLog = (req, res) => {
  try {
    const result = addLog(req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = { createLog };
