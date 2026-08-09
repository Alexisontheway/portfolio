# Deployment Guide

Step-by-step instructions to deploy the portfolio to production.

---

## 1. Database — Neon PostgreSQL

1. Sign up at [neon.tech](https://neon.tech) (free tier)
2. Create a new project (e.g., `portfolio`)
3. Copy the **connection string** from the dashboard
4. Open the **SQL Editor** and paste the contents of `server/db/schema.sql`
5. Run the SQL to create the `contacts` table

Save the connection string — you'll need it for the backend deployment.

---

## 2. Backend — Render

1. Sign up at [render.com](https://render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repo
4. Configure:

| Setting          | Value                      |
|-----------------|----------------------------|
| **Name**        | `portfolio-api`            |
| **Root Dir**    | `server`                   |
| **Runtime**     | Node                       |
| **Build Cmd**   | `npm install`              |
| **Start Cmd**   | `npm start`                |
| **Plan**        | Free                       |

5. Add **Environment Variables**:

```
PORT=4000
NODE_ENV=production
DATABASE_URL=<your-neon-connection-string>
CLIENT_URL=https://portfolio-de9q.onrender.com
NOTIFICATION_EMAIL=you@gmail.com
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=onboarding@resend.dev
```

> ⚠️ **Email requires Resend, not SMTP.** Render's free-tier instances block all outbound SMTP (verified: Gmail/Sendinblue on ports 25/465/587 all time out), so the contact form's notification email is sent over the **Resend HTTPS API** (`RESEND_API_KEY`). Sign up at [resend.com](https://resend.com), create an API key, and set it here. With no verified domain, use `onboarding@resend.dev` as `EMAIL_FROM` (works for notifying your own inbox). The SMTP vars below are only used as a fallback when running the server locally.

6. Click **Deploy**

Note the deployed URL (e.g., `https://portfolio-api-xxxx.onrender.com`)

---

## 3. Frontend — build & serve

The frontend is a static Vite build (`client/dist`). It is currently served at **`https://portfolio-de9q.onrender.com`**.

1. Build the frontend:

```bash
cd client && npm install && npm run build
```

2. Point the production build at the API. The contact form posts to `VITE_API_URL || '/api/contact'`:

```
VITE_API_URL=https://<your-api-service-url>.onrender.com
```

3. Serve `client/dist` and confirm the API URL is reachable from the browser.

> ⚠️ **Important:** the contact form is a silent no-op unless a real API backend answers at `VITE_API_URL` — the static host alone returns a 200 with an empty body for `POST /api/contact`. If the backend is not deployed, the form will appear to succeed but nothing is saved or emailed.

---

## 4. Email Notifications (Resend)

Production notifications are sent via the [Resend](https://resend.com) HTTPS API (Render's free tier blocks outbound SMTP).

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/mo)
2. Open **API Keys** → **Create API Key** → copy the `re_...` key
3. Set `RESEND_API_KEY` on the backend service
4. Without a verified domain, set `EMAIL_FROM=onboarding@resend.dev` — sends to your own inbox work immediately. To send from a branded address, verify a domain in Resend and set `EMAIL_FROM=hello@yourdomain.com`

### Gmail SMTP (local development only)

The server keeps a nodemailer/SMTP fallback for local runs (Gmail blocks nothing from your own machine):

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** → **App Passwords** → generate one for "Mail"
3. Use the 16-character password as `SMTP_PASS` in `server/.env`
4. Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=you@gmail.com`

---

## 5. Custom Domain (Optional)

### Render (site or API)
1. Go to your service → **Settings** → **Custom Domains**
2. Add your domain (e.g., `portfolio.yourdomain.com` for the site, `api.yourdomain.com` for the API) and configure DNS

---

## 6. Post-Deployment Checklist

- [ ] Frontend loads correctly at production URL
- [ ] All sections render properly
- [ ] Dark/Light mode toggle works
- [ ] Contact form submits successfully
- [ ] Database receives new entries
- [ ] Email notifications are sent
- [ ] Mobile responsiveness verified
- [ ] HTTPS is active on all services
- [ ] Rate limiting works (try submitting 6+ times quickly)

---

## Environment Variables Summary

### Backend (`server/.env`)

| Variable             | Description                          | Required |
|---------------------|--------------------------------------|----------|
| `PORT`              | Server port (default: 4000)          | No       |
| `NODE_ENV`          | `production` / `development`         | Yes      |
| `DATABASE_URL`      | PostgreSQL connection string         | Yes      |
| `CLIENT_URL`        | Frontend URL for CORS                | Yes      |
| `RESEND_API_KEY`    | Resend API key (`re_...`) — sends production notifications over HTTPS | Yes |
| `EMAIL_FROM`        | Sender address (e.g. `onboarding@resend.dev` until a domain is verified) | No |
| `NOTIFICATION_EMAIL`| Where to receive notifications       | Yes      |
| `SMTP_HOST`         | SMTP host (local-dev fallback only)  | No       |
| `SMTP_PORT`         | SMTP port (local-dev fallback only)  | No       |
| `SMTP_USER`         | SMTP username/email (local-dev only) | No       |
| `SMTP_PASS`         | SMTP password/app password (local-dev only) | No |

### Frontend (`client/.env`)

| Variable        | Description                    | Required   |
|----------------|--------------------------------|------------|
| `VITE_API_URL` | Backend API URL                | Production |
