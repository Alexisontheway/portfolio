import dotenv from "dotenv";
import dns from "node:dns";

dotenv.config();

// Node 17+ resolves dual-stack hosts (e.g. smtp.gmail.com) IPv6-first by
// default. If the host's IPv6 route is unavailable, outbound SMTP connections
// hang and time out. Force IPv4-first so email can actually be sent.
dns.setDefaultResultOrder("ipv4first");

console.log("PORT =", process.env.PORT);
console.log("DATABASE_URL configured =", Boolean(process.env.DATABASE_URL));

import app from './src/app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║   Portfolio API Server                    ║
  ║   Running on http://localhost:${PORT}        ║
  ║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(22)}║
  ╚══════════════════════════════════════════╝
  `);
});
