# Velox ⚡  
**Secure API Gateway & Control Plane**

Velox is a developer-first API Gateway that lets you put your backend APIs behind a secure, configurable proxy  with authentication, rate limiting, caching, and observability built in.

> ⚠️ **Status:** In Progress not production ready

---

## What is Velox?

Velox sits between your clients and your backend APIs.

    Client → Velox Gateway → Your API


It acts as a **control + data plane split system**:
- **Control Plane** for configuration & management
- **Data Plane** for high-performance request proxying

---

## Architecture Overview

Velox is composed of three layers:

### 1. Frontend (Next.js)
- Dashboard UI
- Authentication via NextAuth
- Acts as a **BFF (Backend-for-Frontend)**
- Backend URLs and secrets are never exposed to the browser

### 2. Control Plane (Express)
- User authentication
- Project management
- Route registration (single & bulk)
- API key management
- Configuration persistence

### 3. Data Plane (API Gateway – Express)
- Runtime API proxy
- Route matching
- Rate limiting (Redis)
- Response caching (Redis)
- Request logging & latency tracking

---

## Core Features

### Implemented / In Progress
- User authentication (Credentials + OAuth)
- Project creation & management
- API key generation, toggle, deletion
- Route registration (single & bulk)
- API Gateway proxying
- Rate limiting per API key
- Per-route caching (GET only)
- Request logging (status, latency, cache hit)

### In Progress
- Frontend dashboard pages
- Analytics & usage views
- Admin-level controls
- Error normalization
- Observability dashboards

### Not Implemented Yet
- Billing & quotas
- Alerts & notifications
- SLA / uptime monitoring
- Webhooks

---

## Gateway Usage (User-Facing)

### Request Format

```http
GET https://api.velox.com/r/{projectId}/your/api/path
x-safeapi-key: YOUR_API_KEY
```
Notes:

Query parameters can be in any order (cache is normalized)

Non-GET routes are never cached

Requests are forwarded as-is to the user’s backend

Responses are returned transparently

Security Model (Current)

API access via x-safeapi-key

Per-project origin allowlist

Rate limiting enforced at gateway

Backend services are never exposed to the browser

``` 
⚠️ Origin headers can be spoofed — origin checks are advisory, not authentication.
```
---
### Data Storage

MongoDB — persistent data (users, projects, routes, keys)

Redis — caching, rate limiting, route cache

Docker volumes — local persistence

Deployment Strategy

Fully dockerized services

Separate containers for:
```
Frontend

Control Plane

Gateway

MongoDB

Redis

Containers communicate via Docker networks

Databases are not exposed publicly
```
### Local Development (High-Level)
#### frontend
```
pnpm dev
```

#### backend services
```
docker compose up
```

Detailed setup steps will be added once frontend stabilizes.

---
## Design Principles

- Explicit > magical

- Control Plane ≠ Data Plane

- Backend URLs are never exposed

- Thin BFF layer (no business logic duplication)

- Predictable, boring APIs


### Tech Stack

```
Frontend: Next.js (App Router), NextAuth

Backend: Node.js, Express

Database: MongoDB

Cache / Rate Limiting: Redis

Infra: Docker (Kubernetes planned later)

```
---
### Project Status

Actively evolving

Built as a SaaS-style system

Intended for learning, experimentation, and portfolio use

Not production ready (yet)

read docs here: [Link](https://royal-tin-f20.notion.site/Velox-API-Gateway-Documentation-2e62b9198aba80c7890ad6b9f7d238f2)
