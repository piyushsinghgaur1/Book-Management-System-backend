# Book Management System API

This backend API allows you to manage books, authors, and categories in a book management system. The system is connected to a PostgreSQL database for data storage, and you can perform CRUD operations (Create, Read, Update, Delete) on books, authors, and categories.

---

## Features

### Author Operations:

- Create, read, update, delete authors.

### Book Operations:

- Add, view, update, delete books.

## Technologies Used

- **Node.js**
- **Sequelize ORM**
- **PostgreSQL**
- **Express.js**

## Installation

### Prerequisites:

- **Node.js**:
- **PostgreSQL**

### Steps:

1.  Clone the repository:

    ```bash
    git clone http://github.com/piyushsinghgaur1/Book-Management-System-backend
    ```

2.  Change directory:

    ```bash
    cd book-management-system
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Start the server:
    ```bash
    npm start
    ```

API is available at [http://localhost:5000](http://localhost:5000).

## API Endpoints

### Author Endpoints:

- `GET /api/v1/author/page/:pageNumber`
- `POST /api/v1/author/addauthor`
- `PATCH /api/v1/author/updateauthor/:authorId`
- `DELETE /api/v1/author/deleteauthor/:authorId`

## Category Endpoints:

- `GET /api/v1/category/page/:pageNumber`
- `POST /api/v1/category/addauthor`
- `PATCH /api/v1/category/updateauthor/:authorId`
- `DELETE /api/v1/category/deleteauthor/:authorId`

### Book Endpoints:

- `GET /api/v1/book/page/:pageNumber`
- `POST /api/v1/book/addbook`
- `PATCH /api/v1/book/updatebook/:bookId`
- `DELETE /api/v1/book/deletebook/:bookId`
