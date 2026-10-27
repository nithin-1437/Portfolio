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

app.listen(PORT, () => {
  console.log(`Portfolio API server running at http://localhost:${PORT}`);
});
