#  Event Booking System – Backend API

This project is a backend Event Booking System built using **Node.js, Express.js, and MongoDB**.  
It supports role-based access control, event management, ticket booking, and background task simulation.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Tokens)** – Authentication
- **bcryptjs** – Password hashing
- **Render** – Backend hosting
- **MongoDB Atlas** – Database hosting

---

##  User Roles

The system supports **two types of users**:

### 1️⃣ Event Organizer
- Can create events
- Can update events
- Manages event details and ticket availability

### 2️⃣ Customer
- Can browse events
- Can book tickets for events
- Receives booking confirmation (simulated)

**API access is strictly controlled using role-based authorization middleware.**

---

##  Authentication & Authorization

- Users authenticate using **JWT tokens**
- Passwords are hashed using **bcrypt**
- Each protected route checks:
  - User authentication
  - User role (Organizer / Customer)

### Example:
- Only **Organizers** can create or update events
- Only **Customers** can book tickets
- Unauthorized access returns `403 Forbidden`

---

##  Core Features

### Event Management
- Create event (Organizer only)
- Update event (Organizer only)
- View all events (Public)

Each event includes:
- Title
- Description
- Date
- Total tickets
- Available tickets

---

###  Ticket Booking
- Customers can book tickets for an event
- Ticket availability is validated before booking
- Available tickets are reduced after successful booking

---

##  Background Tasks (Async Processing)

Background tasks are implemented using **Node.js async processing (`setImmediate`)** to simulate real-world job queues.

###  Background Task 1: Booking Confirmation
- **Triggered when:** A customer successfully books tickets
- **Action:** Simulates sending a booking confirmation email
- **Implementation:** Console log message

```txt
Booking confirmation email sent to customer@example.com
