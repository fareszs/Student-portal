# College Management System

A responsive student portal front-end built with **HTML, CSS, and vanilla JavaScript**. It provides separate experiences for **students** and **admins**, covering course enrollment, payments, grades, timetables, and course management.

> **Note:** This is a front-end only project. Data is static/placeholder, and forms simulate behavior (login, registration, payments) without a backend.

## Features

### Student
- **Login / Register** — simulated authentication with password show/hide
- **Student Profile** — view account details (name, ID, department)
- **View Courses / Enroll** — browse the course catalog and enroll
- **Payments** — choose credit card or cash, confirm payment / generate receipt
- **View Grades** — semester scores and letter grades
- **View Timetable** — weekly class schedule

### Admin
- **Login / Register** — email addresses containing `.admin` route to the admin area
- **Admin Profile** — account details and role
- **Manage Courses** — add, edit, and delete courses (UI only)

## Project Structure

```
Student-portal/
├── index.html                  # Login page (entry point)
├── register.html               # Registration page
├── reset-password.html         # Password reset
├── student-main-page.html      # Student dashboard
├── student-profile-page.html   # Student profile
├── courses-student-page.html   # Course catalog / enroll
├── payment.html                # Payments
├── view-grades.html            # Grades
├── timetable.html              # Weekly timetable
├── admin-main-page.html        # Admin dashboard
├── admin-profile-page.html     # Admin profile
├── manage-courses.html         # Course management
├── css/                        # Stylesheets (one per page)
├── js/                         # Client-side scripts
└── images/                     # SVG icons
```

## Getting Started

No build step or dependencies are required. Open the project in any modern browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/fareszs/Student-portal.git
   ```
2. Open `index.html` in your browser (or run a local server):
   ```bash
   # e.g. with Python
   python -m http.server
   ```
3. Use any email/password to log in — use an email ending in `.admin` to enter the admin dashboard.

## Tech Stack

- HTML5
- CSS3 (Flexbox, custom styles)
- Vanilla JavaScript (DOM manipulation, simulated auth)
- SVG icons
- Font Awesome 6

## Authors

- [fareszs](https://github.com/fareszs)
- [Ahmed-Alaa-Kamal](https://github.com/Ahmed-Alaa-Kamal)
- Ibrahim Ahmed

## License

This project was created for academic purposes. All rights reserved.
