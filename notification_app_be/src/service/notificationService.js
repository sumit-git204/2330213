const { v4: uuidv4 } = require("uuid");
const { Notification } = require("../domain/notification");
const repo = require("../repository/notificationRepository");
const cache = require("../cache/notificationCache");

const createNotification = ({ userID, type, message }) => {
  if (!userID || !type || !message) {
    throw new Error("Missing required fields: userID, type, message");
  }

  const notification = new Notification({
    id: uuidv4(),
    userID,
    type,
    message,
  });

  repo.save(notification);

  // Invalidate user cache on new notification
  cache.del(`user_notifications_${userID}`);

  return notification;
};

const getAllNotifications = () => {
  const cached = cache.get("all_notifications");
  if (cached) return cached;

  const notifications = repo.getAll();
  cache.set("all_notifications", notifications);
  return notifications;
};

const getNotificationsByUser = (userID) => {
  const cacheKey = `user_notifications_${userID}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const notifications = repo.getByUserID(userID);
  cache.set(cacheKey, notifications);
  return notifications;
};

const markAsSent = (id) => {
  const updated = repo.updateStatus(id, "sent");
  if (!updated) throw new Error("Notification not found");
  cache.del("all_notifications");
  return updated;
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationsByUser,
  markAsSent,
};
