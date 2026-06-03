const db = require("../db/notificationDB");

const save = (notification) => db.insert(notification);
const getAll = () => db.findAll();
const getByID = (id) => db.findByID(id);
const getByUserID = (userID) => db.findByUserID(userID);
const updateStatus = (id, status) => db.updateStatus(id, status);

module.exports = { save, getAll, getByID, getByUserID, updateStatus };
