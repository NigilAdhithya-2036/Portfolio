# Portfolio Project (Frontend & Backend Separated)

This repository is split into two separate directories:
- **`frontend/`**: The React + Vite + TypeScript application for the user portfolio UI.
- **`backend/`**: A Node.js + Express API server to handle features like contact form submissions.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

To install all dependencies for both the frontend and backend with a single command, run:

```bash
npm install
npm run install:all
```

This will install the root dependencies (such as `concurrently`), and then automatically install dependencies in both the `frontend` and `backend` subdirectories.

### Running the Application

You can run both the frontend and the backend concurrently in development mode using:

```bash
npm run dev
```

This starts:
- The Vite dev server (frontend) at [http://localhost:5173](http://localhost:5173)
- The Express API server (backend) at [http://localhost:5000](http://localhost:5000)

#### Running Individually
- **Frontend only**: `npm run dev:frontend`
- **Backend only**: `npm run dev:backend`

### Backend Configuration

A `.env` template is provided in `backend/.env.example`. Duplicate this file and rename it to `.env` to configure your environment variables:

```bash
# In backend/ directory
PORT=5000
```

### Folder Structure

```text
├── frontend/             # Frontend application (React + Vite + TypeScript)
│   ├── src/              # React components & pages
│   ├── public/           # Static assets
│   ├── package.json      # Frontend scripts & dependencies
│   └── ...
├── backend/              # Express API server (NodeJS)
│   ├── server.js         # Entry point for Express server
│   ├── package.json      # Backend scripts & dependencies
│   ├── .env.example      # Example environment file
│   └── messages.json     # Mock database for submitted messages (auto-created)
├── package.json          # Root scripts to run both apps concurrently
└── README.md             # Project documentation
```
