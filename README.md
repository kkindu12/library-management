# 📚 Library Management System  
A full-stack application built with **C# .NET 10**, **React + TypeScript**, and **SQLite**.  
This project demonstrates CRUD operations, API development, UI design, and complete system integration.

![.NET](https://img.shields.io/badge/.NET-10.0-blue)
![React](https://img.shields.io/badge/React-19-blue)
![SQLite](https://img.shields.io/badge/SQLite-3-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [How to Run](#how-to-run)
- [Challenges](#challenges)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

## 📘 Overview
This is a full-stack Library Management System that allows users to manage books using CRUD operations.  
The project includes:
- Backend REST API (C# .NET 10 + EF Core + SQLite)
- Frontend UI (React + TypeScript + Axios)
- Integration with API for real-time data updates

## ✨ Features
- Add new books
- Update existing books
- Delete books
- View full list of books
- API built with Entity Framework & SQLite
- Responsive frontend UI built with React

## 🛠 Tech Stack

### Backend
- C# .NET 10
- Entity Framework Core
- SQLite Database

### Frontend
- React 19
- TypeScript
- Axios
- React Router

### Tools
- Git & GitHub
- VS Code / Visual Studio
- Postman for testing

## ⚙ Backend Setup

```bash
cd backend
dotnet restore
dotnet build
dotnet ef migrations add Initial
dotnet ef database update
dotnet run

http://localhost:5268

## 💻 Frontend Setup

cd frontend
npm install
npm run dev

http://localhost:5173

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/books | Get all books |
| GET    | /api/books/{id} | Get book by ID |
| POST   | /api/books | Add new book |
| PUT    | /api/books/{id} | Update book |
| DELETE | /api/books/{id} | Delete book |

## 🗂 Folder Structure

project/
│
├── backend/
│ ├── Controllers/
│ ├── Models/
│ ├── Data/
│ ├── Program.cs
│ └── Library.db
│
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api/
│ └── App.tsx

