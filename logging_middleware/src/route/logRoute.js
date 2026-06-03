const express = require("express");
const router = express.Router();
const { createLog } = require("../handler/logHandler");

// POST /log  — accepts log entries
router.post("/log", createLog);

module.exports = router;
