
# 🚀 NestJS GraphQL Task Management API

A **NestJS** backend project using **GraphQL (Code-First approach)** and **Prisma ORM** with **PostgreSQL**, providing a full-featured **Task & User management system**.

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-v10.0-orange?logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/GraphQL-v16.0-E10098?logo=graphql&logoColor=white" alt="GraphQL">
  <img src="https://img.shields.io/badge/Prisma-v6.0-blue?logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-v15.0-blue?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/TypeScript-v5.0-blue?logo=typescript&logoColor=white" alt="TypeScript">
</p>

---

## ✨ Features

* **👤 User Management**: Create, Read, Update, Delete users
* **📝 Task Management**: Create, Read, Update, Delete tasks
* **🔗 Relations**:

  * One user → multiple tasks
  * Each task → belongs to a user
* **🛡️ Constraints**:

  * Email addresses are **unique** per user
  * Task titles are **unique per user**
* **🕹️ GraphQL Playground** available at `/graphql`

---

## 🛠️ Technologies

* **NestJS** – Node.js backend framework
* **GraphQL** – Code-first API design
* **Prisma ORM** – Type-safe database access
* **PostgreSQL** – Relational database
* **TypeScript** – Strongly typed language

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ayaz-hs-dev/Graphql_API_NestJs.git
cd graphql
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

---

### 4️⃣ Prisma setup

```bash
npx prisma migrate dev --name init   # Run migrations
npx prisma generate                   # Generate Prisma client
npx prisma studio                     # Optional: Open Prisma Studio
```

---

### 5️⃣ Start the server

```bash
npm run start:dev
```

* Server: `http://localhost:3000`
* GraphQL Playground: `http://localhost:3000/graphql`

---

## 📌 GraphQL Usage

### **User Operations**

**Create User**

```graphql
mutation {
  createUser(createUserInput: { name: "Alice", email: "alice@example.com" }) {
    id
    name
    email
  }
}
```

**Get All Users**

```graphql
query {
  users {
    id
    name
    email
  }
}
```

---

### **Task Operations**

**Create Task**

```graphql
mutation {
  createTask(createTaskInput: { title: "Finish homework", userId: 1 }) {
    id
    title
    status
    user {
      id
      name
    }
  }
}
```

**Get All Tasks**

```graphql
query {
  tasks {
    id
    title
    status
    user {
      id
      name
    }
  }
}
```

**Get Single Task by ID**

```graphql
query {
  task(id: 1) {
    id
    title
    status
    user {
      id
      name
    }
  }
}
```

**Update Task**

```graphql
mutation {
  updateTask(updateTaskInput: { id: 1, title: "Finish math homework", status: true }) {
    id
    title
    status
    user {
      id
      name
    }
  }
}
```

**Delete Task**

```graphql
mutation {
  removeTask(id: 1) {
    id
    title
  }
}
```

---

## ⚠️ Notes

* **Task titles are unique per user** – cannot create duplicates.
* **User emails are unique** – duplicate emails are rejected.
* Use **Prisma Studio** for a visual database view.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Please fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the **MIT License**.


