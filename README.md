# Library Management System

This repository contains a simple Library Management System with:

- Backend: ASP.NET Core Web API (.NET 8), EF Core, SQLite
- Frontend: React + TypeScript (Vite)

## Structure

- backend/ — C# ASP.NET Core Web API
- frontend/ — React + TypeScript frontend (Vite)
- README.md — this file

## Quick run instructions

### Backend
1. Install .NET 8 SDK from https://dotnet.microsoft.com/.
2. Open terminal in `backend/`.
3. Restore packages: `dotnet restore`
4. Add EF tools if needed: `dotnet tool install --global dotnet-ef` (if not installed)
5. Create migrations and update DB:
   - `dotnet ef migrations add Initial`
   - `dotnet ef database update`
6. Run the API:
   - `dotnet run`

The API runs on HTTPS port displayed in terminal (defaults to 7243 for development). Swagger UI available in development.

### Frontend
1. Install Node.js (v18+ recommended).
2. Open terminal in `frontend/`.
3. Install deps: `npm install`
4. Set API base (optional) by creating `.env` with `VITE_API_BASE=https://localhost:7243/api`
5. Run dev server: `npm run dev`
6. Open browser at `http://localhost:5173`.

## Notes
- The backend automatically applies migrations on startup; for production consider managing migrations explicitly.
- If using HTTPS with self-signed certs, allow the browser to trust the dev certificate.

## What's included
All source files for backend and frontend, minimal styling, and a working CRUD flow.
