# DDoS-Brute-force-attack

# Educational Login Testing Script

> ⚠️ **Disclaimer:**  
> This script is created **only for educational purposes** — to understand how login systems can be protected against brute-force attacks.  
> **Do not** run this on any system unless you have **explicit written permission** from the owner.  
> Unauthorized access is illegal and unethical.

---

## 📌 About

This Node.js script demonstrates how a brute-force attempt *could* work so that developers and students can better understand:

- How attackers might try multiple passwords.
- Why rate-limiting, CAPTCHA, and account lockouts are important.
- How to secure authentication endpoints.

It is intended for use in **safe labs** like:


- Your own locally hosted servers or test projects.

---

## 🚀 Features

- Reads passwords from a dictionary file.
- Tests login attempts against a configurable API endpoint.
- Displays HTTP status, success flag, and user details (if allowed).
- Graceful error handling and delay between attempts.

---

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or yarn

---

