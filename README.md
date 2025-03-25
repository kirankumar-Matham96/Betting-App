# Betting Platform

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Docker Deployment](#docker-deployment)

## Overview

The **Betting Platform** is a web-based application that allows users to place bets on various games. Admins can manage games, monitor bets, and handle payouts. The platform ensures secure transactions and fair betting practices using modern technologies.

## Features

### Admin Panel

- Create, update, and delete games.
- Set betting limits.
- Manage bets and payouts.
- Admin wallet for commissions.

### Player Functionality

- User authentication using JWT.
- Wallet management (deposit/withdraw money).
- Place bets on available games.
- View wallet balance and transaction history.

### Game Logic

- Betting window until game ends.
- Secure random winner selection.
- Automatic payout distribution.

## Tech Stack

- **Frontend**: React, Redux Toolkit, Ant Design, React Router
- **Backend**: Java 17, Spring Boot 3, Spring Security, Spring Data JPA, MySQL
- **Database**: MySQL
- **Deployment**: Docker, Docker Compose, Vercel, AWS

## File Structure

```
Betting-App/
│── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Page Components
│   │   ├── redux/       # Redux Toolkit store
│   │   ├── App.js       # Main React App
│   │   ├── index.js     # Entry point
│   ├── public/
│   ├── package.json
│   ├── .env
│
│── backend/             # Spring Boot backend
│   ├── src/
│   │   ├── main/java/com/bettingplatform/
│   │   │   ├── controller/   # API Controllers
│   │   │   ├── service/      # Business Logic
│   │   │   ├── repository/   # Database Interactions
│   │   │   ├── config/       # Security & JWT Config
│   │   ├── resources/
│   ├── build.gradle
│   ├── Dockerfile
│   ├── .env
│
│── docker-compose.yml
│── README.md
```

## Setup and Installation

### Prerequisites

- Node.js (for frontend)
- Java 17 (for backend)
- Gradle (for backend build)
- Docker & Docker Compose (for containerization)

### Backend Setup

```sh
cd backend
cp .env.example .env  # Update .env with DB credentials
./gradlew clean build --refresh-dependencies
```

### Frontend Setup

```sh
cd frontend
cp .env.example .env  # Update .env with API URL
npm install
```

## Running the Application

### Running Locally (without Docker)

#### Backend

```sh
cd backend
./gradlew bootRun
```

#### Frontend

```sh
cd frontend
npm start
```

Access the app at `http://localhost:3000`

## Environment Variables

Create a `.env` file in `backend/` and `frontend/` with:

### Backend `.env`

```
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=betting_db
MYSQL_USER=bet_user
MYSQL_PASSWORD=bet_password
SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/betting_db?createDatabaseIfNotExist=true
SPRING_DATASOURCE_USERNAME=bet_user
SPRING_DATASOURCE_PASSWORD=bet_password
SPRING_JPA_HIBERNATE_DDL_AUTO=update
SERVER_PORT=8080
JWT_SECRET=my_super_secret_jwt_key
```

### Frontend `.env`

```
REACT_APP_API_URL=http://localhost:8080
```

## API Documentation

The backend exposes REST APIs documented with Swagger.

- **Access API Docs**: `http://localhost:8080/swagger-ui.html`

## Docker Deployment

### Build and Start Services

```sh
docker-compose up --build
```

### Stop Services

```sh
docker-compose down
```

### Access Application

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080`
- mysql server: `http://localhost:3307`

## Notes

- Ensure MySQL is running before starting the backend.
- If deploying to cloud, update `.env` variables accordingly.
