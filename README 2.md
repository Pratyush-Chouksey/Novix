# Novix Tech Solutions Scaffold (MERN Stack)

A complete MERN stack project scaffold for **Novix** (novix.in), a technology solutions agency.

## Project Structure

```text
Novix/
├── server/                 # Backend (Node.js + Express + MongoDB)
│   ├── config/             # DB Connection Config
│   ├── controllers/        # Route Handlers / Controller Logic
│   ├── middleware/         # Auth & Safety Guards (API Key checks)
│   ├── models/             # Mongoose Schemas (Contact Inquiry Schema)
│   ├── routes/             # Express routes with validations
│   ├── utils/              # Email templates & Nodemailer utilities
│   ├── .env.example        # Environment variables templates
│   └── index.js            # Express Entrypoint
└── client/                 # Frontend (Vite + React + TailwindCSS)
    ├── src/
    │   ├── assets/         # Static illustrations & images
    │   ├── components/
    │   │   ├── sections/   # Navigation bar, footers
    │   │   └── ui/         # Buttons, inputs, dropdown selectors
    │   ├── hooks/          # Custom hooks (e.g. scrollToTop)
    │   ├── pages/          # Home, Services, About, Contact
    │   ├── utils/          # API Axios Client
    │   ├── App.jsx         # Routes mappings
    │   └── main.jsx        # Mounting React client
    ├── tailwind.config.cjs # Custom styling configurations
    └── postcss.config.cjs  # PostCSS autoprefixer configurations
```

---

## Getting Started

### 1. Backend Server Setup

1. Navigate to `/server`:
   ```bash
   cd server
   ```
2. Install dependencies (already completed):
   ```bash
   npm install
   ```
3. Copy the environment template and adjust values:
   ```bash
   cp .env.example .env
   ```
   *Note: Set your MongoDB Connection URI (`MONGO_URI`) and your SMTP credentials for Nodemailer notifications.*
4. Start the backend in development mode:
   ```bash
   npm run dev
   ```
   The backend will start running at `http://localhost:5000`.

### 2. Frontend Client Setup

1. Navigate to `/client`:
   ```bash
   cd client
   ```
2. Install dependencies (already completed):
   ```bash
   npm install
   ```
3. Start the client dev server:
   ```bash
   npm run dev
   ```
   The application will start running locally (usually at `http://localhost:5173`).

---

## API Endpoints

### 1. Public Contact Form Submission
* **Route**: `POST /api/contact`
* **Content-Type**: `application/json`
* **Body Fields**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@company.com",
    "phone": "+91 99887 76655",
    "service": "Web Development",
    "message": "We need a custom dashboard built in React."
  }
  ```
* **Validation Rules**:
  * `name`: Required, maximum 100 characters.
  * `email`: Required, valid email format.
  * `phone`: Required.
  * `service`: Required, must be one of the 6 enums:
    * `Web Development`, `Mobile Applications`, `Cloud & DevOps`, `UI/UX Design`, `Cybersecurity Solutions`, `AI & Data Analytics`
  * `message`: Required, maximum 2000 characters.

### 2. Admin Contacts Dashboard Fetch
* **Route**: `GET /api/contact`
* **Access**: Admin only (Protected)
* **Required Header**: `x-api-key`
  * Match this header's value to the `ADMIN_API_KEY` defined in the server `.env` file (e.g., `novix_admin_secret_key_2026`).
* **Response**: Lists all submission logs sorted from newest to oldest.
