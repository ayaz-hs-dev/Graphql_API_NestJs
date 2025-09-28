
---

# NestJS GraphQL PstgreSQL API

This is a **NestJS** project using **GraphQL (code-first)** and **Prisma ORM** with **PostgreSQL**. It provides a **Task and User management system** with CRUD operations.

---

## Features

* **User CRUD**: Create, Read, Update, Delete users
* **Task CRUD**: Create, Read, Update, Delete tasks
* **Relations**:

  * One user can have multiple tasks
  * Each task belongs to one user
* **Constraints**:

  * Email is unique per user
  * Task titles are unique per user
* **GraphQL playground** available at `/graphql`

---

## Technologies Used

* **NestJS** - Node.js framework
* **GraphQL** - Code-first approach
* **Prisma ORM** - Database access
* **PostgreSQL** - Database
* **TypeScript** - Strongly typed backend

---

## Project Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file at the root:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

* Replace `username`, `password`, and `mydb` with your PostgreSQL credentials.

---

### 4️⃣ Prisma setup

* **Run migrations** (create tables):

```bash
npx prisma migrate dev --name init
```

* **Generate Prisma Client**:

```bash
npx prisma generate
```

* **Optional**: Open Prisma Studio to inspect data:

```bash
npx prisma studio
```

---

### 5️⃣ Run the project

```bash
npm run start:dev
```

* Server runs at `http://localhost:3000`
* GraphQL Playground available at `http://localhost:3000/graphql`

---

## GraphQL Usage

### Create User

```graphql
mutation {
  createUser(createUserInput: { name: "Alice", email: "alice@example.com" }) {
    id
    name
    email
  }
}
```

### Create Task

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

### Get All Tasks

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

### Get Single Task

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

### Update Task

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

### Delete Task

```graphql
mutation {
  removeTask(id: 1) {
    id
    title
  }
}
```

---

## Notes / Tips

* **Task titles are unique per user**. You cannot create two tasks with the same title for the same user.
* **User email is unique**. Creating a user with an existing email will throw an error.
* Use **Prisma Studio** to view and manage your database easily.

---

## License

This project is open-source and free to use.

---

If you want, I can also make a **Postman collection section** in this README with all **ready-to-send queries/mutations**, so anyone can test the API without opening GraphQL Playground.

Do you want me to add that?
