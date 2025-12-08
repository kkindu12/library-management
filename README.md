📚 Library Management System

A full-stack CRUD application built with C# .NET (Backend) and React + TypeScript (Frontend) using SQLite + Entity Framework for persistent storage.

This project demonstrates seamless integration between backend and frontend while following industry-standard structure, code quality, error handling, and deployment readiness.

🚀 Features
🔧 Backend (ASP.NET Core + EF Core)

RESTful API with Controllers

CRUD operations for books

Connected to SQLite via Entity Framework

Validation + error handling

CORS enabled

Clean architecture separation

💻 Frontend (React + TS + Vite)

View all books (table/list)

Add a new book

Edit an existing book

Delete a book

Form validations

Responsive UI

Axios API integration

🔗 Full Integration

Frontend communicates with backend via Axios

API base URL handled via .env variables

Proper error messages from API shown on UI

📁 Project Directory Structure
library-management/
│
├── backend/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Migrations/
│   ├── Program.cs
│   ├── appsettings.json
│   └── LibraryApi.csproj
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── types.ts
    │   ├── App.tsx
    │   └── main.tsx
    ├── vite.config.ts
    ├── tsconfig.json
    └── .env

⚙️ Installation & Running Guide
1️⃣ Backend Setup (ASP.NET Core API)
Navigate to backend folder:
cd backend

Install dependencies:
dotnet restore

Create database:
dotnet ef migrations add Initial
dotnet ef database update

Run backend:
dotnet run

Backend is available at
http://localhost:5000

2️⃣ Frontend Setup (React + TypeScript + Vite)
Navigate to frontend:
cd frontend

Install dependencies:
npm install

Create .env file:
VITE_API_BASE=http://localhost:5000

Start frontend:
npm run dev

Open in browser:
http://localhost:5173

🧪 API Endpoints
Method	URL	Description
GET	/api/books	Get all books
GET	/api/books/{id}	Get book by ID
POST	/api/books	Add new book
PUT	/api/books/{id}	Update book
DELETE	/api/books/{id}	Delete book
🧠 Error Handling
Backend:

400 for validation errors

404 for missing items

500 for server issues

Frontend:

Shows toast/pop-up errors

Validates empty fields

Handles network failures