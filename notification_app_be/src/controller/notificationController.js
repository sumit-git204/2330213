const service = require("../service/notificationService");

const create = (req, res) => {
  try {
    const notification = service.createNotification(req.body);
    return res.status(201).json(notification);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getAll = (req, res) => {
  const notifications = service.getAllNotifications();
  return res.status(200).json(notifications);
};

const getByUser = (req, res) => {
  const { userID } = req.params;
  const notifications = service.getNotificationsByUser(userID);
  return res.status(200).json(notifications);
};

const markSent = (req, res) => {
  try {
    const updated = service.markAsSent(req.params.id);
    return res.status(200).json(updated);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

module.exports = { create, getAll, getByUser, markSent };
