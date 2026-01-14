# 🏦 Loan Management System

A comprehensive web-based loan management platform built with React and Vite, designed to streamline the loan application, approval, and tracking process for borrowers, lenders, administrators, and analysts.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [User Roles](#user-roles)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Loan Management System is a modern web application that provides a complete solution for managing loans across multiple stakeholders. The system supports four distinct user roles, each with tailored dashboards and functionalities to meet their specific needs.

## ✨ Features

### 🔐 Common Features
- User Registration and Authentication
- Profile Management
- Password Recovery
- Role-based Access Control
- Responsive Design

### 👤 Borrower Features
- Apply for Loans
- View Loan Status and Details
- Make Payments
- View Payment Schedule
- Track Transaction History
- Personal Dashboard with Loan Overview

### 💼 Lender Features
- Create Loan Offers
- Review Borrower Requests
- View Borrower Details and Credit Information
- Manage Loan Offers
- Track Payment Collections
- Monitor Portfolio Performance

### 👨‍💼 Administrator Features
- User Management (Create, Edit, Delete)
- Loan Oversight and Monitoring
- Transaction Management
- System Settings Configuration
- Comprehensive Admin Dashboard
- Access to All System Data

### 📊 Analyst Features
- Loan Analysis and Reporting
- Risk Assessment Tools
- Charts and Insights
- Generate Reports
- Data Visualization Dashboard

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (JSX)
- **Styling**: CSS
- **Code Quality**: ESLint

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **Development Server**: Vite Dev Server

## 📁 Project Structure

```
loan-management/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images, icons, and other assets
│   │   ├── components/      # Reusable React components
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   └── TableComponent.jsx
│   │   ├── data/            # Mock data and utilities
│   │   │   ├── dummyLoans.js
│   │   │   ├── dummyTransactions.js
│   │   │   └── dummyUsers.js
│   │   ├── pages/           # Page components organized by role
│   │   │   ├── admin/       # Admin pages
│   │   │   ├── analyst/     # Analyst pages
│   │   │   ├── borrower/    # Borrower pages
│   │   │   ├── common/      # Shared pages (Login, Register, etc.)
│   │   │   └── lender/      # Lender pages
│   │   ├── styles/          # Global and shared styles
│   │   ├── App.jsx          # Main application component
│   │   ├── App.css          # Application styles
│   │   ├── main.jsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   ├── vite.config.js       # Vite configuration
│   └── eslint.config.js     # ESLint configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omprakash970/loan-management.git
   cd loan-management
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

#### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

#### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

#### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 👥 User Roles

### 1. **Borrower** 👤
Individuals seeking loans can:
- Submit loan applications
- View their loan status
- Make payments
- Access payment schedules
- Review transaction history

### 2. **Lender** 💼
Loan providers can:
- Create and manage loan offers
- Review and approve borrower requests
- View detailed borrower information
- Track payments and collections
- Monitor their lending portfolio

### 3. **Administrator** 👨‍💼
System administrators can:
- Manage all users (create, edit, delete)
- Oversee all loans in the system
- Monitor transactions
- Configure system settings
- Access comprehensive reporting

### 4. **Analyst** 📊
Financial analysts can:
- Analyze loan data and trends
- Perform risk assessments
- Generate reports
- View charts and insights
- Monitor system-wide metrics

## 💻 Development

### Code Structure

- **Components**: Reusable UI components located in `src/components/`
- **Pages**: Route-specific components organized by user role in `src/pages/`
- **Data**: Mock data and utilities in `src/data/`
- **Styles**: Global and component-specific styles

### Adding New Features

1. Create new components in the appropriate directory
2. Add routing if needed
3. Update relevant dashboards
4. Test thoroughly across user roles

### Code Quality

- Follow the existing code style and conventions
- Run `npm run lint` before committing
- Write clean, maintainable code
- Comment complex logic

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Project Link: [https://github.com/omprakash970/loan-management](https://github.com/omprakash970/loan-management)

---

**Note**: This is a frontend application currently using mock data. Backend integration may be required for production use.
