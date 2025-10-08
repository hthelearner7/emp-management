# 🧑‍💼 Interactive Employee Management System

A modern and interactive employee management web app built with **React** and **Tailwind CSS**.
It features task tracking, announcements, personal notes, progress indicators, role-based dashboards, modal-based employee ID cards, and an **interactive calendar** for creating and managing events — all designed to simulate a real-world workspace environment.

---

## 🚀 Features

* 🧭 **Role-Based Dashboards:** Separate interfaces for employees and admin roles.
* ✅ **Task Tracking:** Assign and monitor employee tasks with visual progress indicators.
* 📢 **Announcements:** Post and view organization-wide announcements.
* 🗒️ **Personal Notes:** Employees can create and manage private notes.
* 🗓️ **Calendar & Events:** Add, edit, and view personal or work-related events.
* 🆔 **Employee ID Card Modal:** Interactive modal displaying employee details.
* 💾 **Local Storage Integration:** Used to store login data, notes, and events persistently across sessions.

---

## 🧠 Authentication and Data Persistence

This project uses **localStorage** for simulating authentication and data persistence.
Each role (admin and employee) has pre-created credentials stored in localStorage that can be used to explore different dashboards.

---

## 🧩 How to Use

Since this project doesn’t connect to a backend, login functionality is simulated through **localStorage**.

To experience the role-based dashboards:

1. Open the app in your browser.
2. Go to **Developer Tools → Application Tab → Local Storage**.
3. You’ll find pre-created **employee** and **admin** entries with email and password values.
4. Copy the email and password of either role and use them on the login screen to simulate the working.
5. You’ll be logged in as that user and redirected to their respective dashboard.

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS
* **State Management:** React Hooks
* **Data Storage:** localStorage (for login, events, notes, announcements)

---

## 💡 Future Enhancements

* Backend integration with JWT-based authentication and MongoDB.
* CRUD APIs for employee and admin roles.
* Cloud-based storage for persistent data.
