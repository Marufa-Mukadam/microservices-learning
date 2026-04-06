# Module 01: Microservices Basics

## 📌 What this module covers

- What is a microservice vs a monolith
- REST and HTTP fundamentals
- How services talk to each other
- Basic project structure for a service

## 🧠 Key concepts learned

- Services should be small and focused on one responsibility
- Services communicate over HTTP using REST
- An Event Bus decouples services — no service talks directly to another
- Each service gets its own `POST /events` endpoint to receive events

## 🛠️ What I built

A basic app that shows how microservices work. In this app we have created a Post and Comment service and an Express based Event Bus.

### Architecture

[Event Bus Diagram](./image.png)

When a user creates a post, the **Posts Service** emits an event to the **Event Bus**. The Event Bus then fans it out by sending a `POST /events` request to every service:

- `localhost:4000` → Posts Service
- `localhost:4001` → Comments Service
- `localhost:4002` → Query Service

Each service receives the same event payload:

```json
{
  "type": "PostCreated",
  "data": { "id": "a1jp5", "title": "new post" }
}
```

## 💡 Gotchas & things to remember

- Adding a new service is easy — just register it with the Event Bus, no other service needs to change
- Keep ports consistent across services to avoid confusion during development
- Every service needs its own `node_modules` — don't share them across services

## ✅ Checklist

- [ ] Read/watched the core material
- [ ] Completed the hands-on exercise
- [ ] Can explain the concept without notes
- [ ] Code committed and working

## 🔗 Resources used

- [Stephen Grider — Microservices with Node.js (Udemy)](https://www.udemy.com/course/microservices-with-node-js-and-react/)

---
*Status: 🔄 In progress*