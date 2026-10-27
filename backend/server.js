import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Rate Limiter: maximum 10 requests per 15 minutes per IP to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many contact requests from this IP. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Root Endpoint
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Portfolio API Server | Satya Sai Nithin Reddy</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #070b14; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
          .card { background: #0d1527; border: 1px solid #1f2e4d; padding: 2.5rem; border-radius: 1.25rem; max-width: 520px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); }
          .badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; font-size: 12px; font-weight: 600; margin-bottom: 1rem; }
          .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block; box-shadow: 0 0 10px #10b981; }
          h1 { color: #38bdf8; margin: 0 0 0.5rem 0; font-size: 1.5rem; }
          p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin: 0.5rem 0 1.5rem 0; }
          .btn { display: inline-block; padding: 0.75rem 1.75rem; background: linear-gradient(135deg, #0284c7, #2563eb); color: white; text-decoration: none; border-radius: 0.75rem; font-weight: 600; font-size: 0.9rem; box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.4); }
          .endpoints { margin-top: 1.5rem; font-family: monospace; font-size: 11px; color: #64748b; background: #070f22; padding: 10px; border-radius: 8px; border: 1px solid #1e293b; text-align: left; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge"><span class="dot"></span> Backend API Server Online (Port 5001)</div>
          <h1>SATYA SAI NITHIN REDDY</h1>
          <p>Portfolio REST API Service is actively running.<br/>View the full interactive developer portfolio below:</p>
          <a class="btn" href="http://localhost:5173">Open Portfolio Website (Port 5173) &rarr;</a>
          <div class="endpoints">
            &bull; Health Check: <a href="/api/health" style="color:#38bdf8;">/api/health</a><br/>
            &bull; Contact Form: POST /api/contact
          </div>
        </div>
      </body>
    </html>
  `);
});

// Health Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    developer: 'SATYA SAI NITHIN REDDY NALLAMILLI',
    specialization: 'Cybersecurity & Blockchain Technology (KL University)'
  });
});

// Contact Endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required.'
    });
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address format provided.'
    });
  }

  console.log(`[CONTACT RECEIVED] From: ${name} <${email}> | Subject: ${subject}`);
  console.log(`[MESSAGE CONTENT] ${message}`);

  // Optional Nodemailer dispatch if SMTP environment variables are configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL || 'nallamillinithinreddy876@gmail.com',
        replyTo: email,
        subject: `[Portfolio Inquiry] ${subject}`,
        text: `You received a new inquiry from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">New Portfolio Contact Message</h2>
            <p><strong>Sender:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #0284c7; margin-top: 15px;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        `
      });

      return res.status(200).json({
        success: true,
        message: 'Message delivered to Nithin successfully via email!'
      });
    } catch (error) {
      console.error('[SMTP ERROR]', error);
      // Even if SMTP fails, acknowledge receipt and notify caller
      return res.status(200).json({
        success: true,
        message: 'Message logged on server successfully. (SMTP delivery deferred).'
      });
    }
  }

  // Acknowledge receipt when SMTP not explicitly configured
  return res.status(200).json({
    success: true,
    message: 'Message logged successfully on server. Direct email client fallback is ready.'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Portfolio API server running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use by an active backend instance (the server is already running).`);
  } else {
    console.error('Server error:', err);
  }
});
