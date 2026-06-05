# Notification System Design

## Overview

This document describes the architecture of the notification system backend. The system is responsible for creating, storing, and delivering notifications to users — triggered either by API calls or scheduled background jobs (e.g. vehicle maintenance alerts).

---

## Architecture

The system follows a **Clean Architecture / Layered Architecture** pattern given as below:

```
HTTP Request
     │
     ▼
  Route Layer         → Defines endpoints, attaches auth middleware
     │
     ▼
  Handler Layer       → Parses request, calls controller, returns response
     │
     ▼
  Controller Layer    → Orchestrates use case logic
     │
     ▼
  Service Layer       → Core business logic (create, validate, update status)
     │
     ▼
  Repository Layer    → Abstracts data access (DB reads/writes)
     │
     ▼
  DB Layer            → Actual data store (in-memory / MongoDB / PostgreSQL)
```

Supporting layers:
- **Domain** — Pure business entities (e.g. Notification class)
- **Cache** — In-memory cache (TTL-based, Redis-ready)
- **Auth** — Token-based authentication middleware
- **Middleware** — Request logging, error handling
- **Config** — Environment-based configuration
- **Utils** — Shared helper functions

---

## Components

### 1. notification_app_be
The main REST API backend for managing notifications.

**Endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| POST | /notifications | Create a new notification |
| GET | /notifications | Get all notifications |
| GET | /notifications/user/:userID | Get notifications for a specific user |
| PATCH | /notifications/:id/sent | Mark a notification as sent |

**Notification Schema:**
```json
{
  "id": "uuid",
  "userID": "string",
  "type": "maintenance | alert | reminder",
  "message": "string",
  "status": "pending | sent | failed",
  "createdAt": "ISO timestamp"
}
```

### 2. logging_middleware
A standalone logging service that accepts log entries via HTTP.

**Log Schema:**
```json
{
  "stack": "backend | frontend",
  "level": "error | warn | info | debug",
  "package": "handler | service | ...",
  "message": "string"
}
```

### 3. vehicle_maintence_scheduler
A background job service that checks vehicles due for maintenance and triggers notifications. Runs on a cron schedule daily at 8:00 AM.

---

## Data Flow: Vehicle Maintenance Notification

```
[Cron Job - Daily 8AM]
        │
[Check all vehicles in DB]
        │
[Filter: today >= lastService + interval]
        │
[POST /notifications for each due vehicle]
        │
[Notification stored: status = "pending"]
        │
[Delivered → status = "sent"]
```

---

## Caching Strategy

- Notifications cached in memory with 1-minute TTL
- Cache invalidated on write/update
- Production: replace with Redis

---

## Future Improvements

- Real database (MongoDB / PostgreSQL)
- Redis cache
- JWT authentication
- Email/SMS delivery
- Pagination on GET endpoints
- Unit and integration tests
