# Portfolio Backend API Service

Lightweight, production-ready Express.js API designed to handle contact form inquiries, rate limiting, and email dispatch for Satya Sai Nithin Reddy's personal portfolio.

## Features
- **Health Check Endpoint (`GET /api/health`)**: Reports server uptime, timestamp, and candidate metadata.
- **Contact Message Endpoint (`POST /api/contact`)**:
  - Input validation (validates name, email format, subject, and message length).
  - Rate limiting (maximum 10 submissions per 15 minutes per IP address to safeguard against bot spam).
  - Optional Nodemailer integration for automated forwarding to `nallamillinithinreddy876@gmail.com`.
  - CORS security configuration.

## Installation & Running

```bash
cd backend
npm install
npm run dev
```

The server starts by default at `http://localhost:5000`.

## Environment Configuration (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in SMTP credentials if you wish to forward contact form inquiries directly to Gmail using an App Password.
