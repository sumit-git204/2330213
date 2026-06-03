const express = require("express");
const router = express.Router();
const handler = require("../handler/notificationHandler");
const { authenticate } = require("../auth/authMiddleware");

// POST   /notifications          — create a new notification
// GET    /notifications          — get all notifications
// GET    /notifications/user/:userID — get notifications for a user
// PATCH  /notifications/:id/sent — mark notification as sent

router.post("/notifications", authenticate, handler.handleCreate);
router.get("/notifications", authenticate, handler.handleGetAll);
router.get("/notifications/user/:userID", authenticate, handler.handleGetByUser);
router.patch("/notifications/:id/sent", authenticate, handler.handleMarkSent);

module.exports = router;
