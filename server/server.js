import dotenv from "dotenv";
import dns from "node:dns";
import net from "node:net";

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

// ---- TEMPORARY network diagnostic (remove after SMTP issue resolved) ----
function probe(host, port) {
  return new Promise((resolve) => {
    const sock = net.connect({ host, port, timeout: 8000 });
    let done = false;
    const finish = (msg) => { if (!done) { done = true; sock.destroy(); resolve(msg); } };
    sock.once("connect", () => finish("CONNECT OK"));
    sock.once("timeout", () => finish("TIMEOUT"));
    sock.once("error", (e) => finish("ERR " + e.code));
  });
}

const TARGETS = [
  ["smtp.gmail.com", 587],
  ["smtp.gmail.com", 465],
  ["smtp.gmail.com", 25],
  ["smtp-relay.gmail.com", 587],
  ["smtp.brevo.com", 587],
  ["smtp-relay.sendinblue.com", 587],
  ["api.resend.com", 443],
];
(async () => {
  const results = await Promise.all(TARGETS.map(([h, p]) => probe(h, p)));
  TARGETS.forEach(([h, p], i) => console.log(`[netdiag] ${h}:${p} -> ${results[i]}`));
})();
