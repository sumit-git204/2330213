const controller = require("../controller/notificationController");

// Handlers simply delegate to controllers
// This layer can add request validation, logging, etc.

const handleCreate = (req, res) => controller.create(req, res);
const handleGetAll = (req, res) => controller.getAll(req, res);
const handleGetByUser = (req, res) => controller.getByUser(req, res);
const handleMarkSent = (req, res) => controller.markSent(req, res);

module.exports = { handleCreate, handleGetAll, handleGetByUser, handleMarkSent };
