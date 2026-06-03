// Domain model — defines the shape of a Notification object
// This is the core business entity, independent of DB or HTTP

class Notification {
  constructor({ id, userID, type, message, status = "pending", createdAt }) {
    this.id = id;
    this.userID = userID;
    this.type = type;       // e.g. "maintenance", "alert", "reminder"
    this.message = message;
    this.status = status;   // "pending" | "sent" | "failed"
    this.createdAt = createdAt || new Date().toISOString();
  }
}

module.exports = { Notification };
