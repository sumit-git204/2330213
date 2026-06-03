// In-memory store — swap with MongoDB/PostgreSQL when ready
const notifications = [];

const insert = (notification) => {
  notifications.push(notification);
  return notification;
};

const findAll = () => notifications;

const findByID = (id) => notifications.find((n) => n.id === id) || null;

const findByUserID = (userID) =>
  notifications.filter((n) => n.userID === userID);

const updateStatus = (id, status) => {
  const notification = notifications.find((n) => n.id === id);
  if (notification) notification.status = status;
  return notification;
};

module.exports = { insert, findAll, findByID, findByUserID, updateStatus };
