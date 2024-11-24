# Soar

Soar is a modern, responsive web application built with **Next.js** that showcases a variety of features like reusable components, charts, user cards, and payment cards, transaction cards. This application includes dashboards design, user profile design, making it an ideal base for web applications.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Routing](#routing)
- [Components](#components)
- [License](#license)

## Features
- **Dashboard Overview**: Displays various charts like Line, Bar, and Pie, along with user stats, payment history, and payment transaction cards.
- **User Cards**: A dynamic user card system that provides an overview of users' activity and status.
- **Payment Transaction Handling**: Includes payment history and transaction cards that show payment details.
- **Responsive Design**: The app is fully responsive and works seamlessly across devices (desktop, tablet, mobile).
- **Charting with Chart.js**: Visualize key metrics with dynamic graphs (Line, Bar, Pie) using Chart.js.
- **Settings Route**: A tab-based settings section where users can manage their profile, preferences, and security settings.

## Tech Stack
- **Next.js**: A React-based framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Chart.js**: A JavaScript library for rendering interactive charts.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: Strongly-typed superset of JavaScript for better development experience.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/raziakhan0810/soar-task
    ```

2. Navigate into the project directory:
    ```bash
    cd soar
    ```

3. Install dependencies using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- **Dashboard**: Once you start the application, the default view is the dashboard that displays various graphs (Line, Pie, Bar), user cards, payment history, and payment transaction cards.
- **Settings**: Navigate to the `/settings` route to manage settings, including Edit Profile, Preferences, and Security sections.

## File Structure

Here is an overview of the project's file structure:

```
/soar
├── /app
│   ├── /components        # Reusable components
│   │   ├── /cards         # Payment cards, user cards, etc.
│   │   ├── /charts        # Chart components (Line, Pie, Bar charts)
│   │   ├── /forms         # Form components like input fields
│   │   ├── /layout        # Layout components (Header, Sidebar)
│   │   └── /common (ui)            # Common UI components (Buttons, Modals)
│   ├── /mock-data         # Mock data for charts, users, payments, etc.
│   ├── /pages
│   │   ├── /dashboard     # Dashboard page
│   │   ├── /settings      # Settings page with tabs (Profile, Preferences, Security)
│   │   └── /index.tsx     # Homepage (renders dashboard by default)
│   ├── /assets            # Images, icons, etc.
│   ├── /styles            # Global styles (Tailwind CSS configuration)
│   └── /types             # TypeScript types and interfaces
├── /public                # Public files like images, fonts, etc.
├── .env.local             # Environment variables
├── tailwind.config.js     # Tailwind CSS configuration
└── next.config.js         # Next.js configuration
```

## Routing

This project includes the following routes:

- **Dashboard Route** (`/` or `/dashboard`):
  - Displays graphs like Line, Bar, and Pie charts.
  - Shows user cards and payment history with transaction details.

- **Settings Route** (`/settings`):
  - **Profile**: Edit user profile details.
  - **Preferences**: Manage application preferences (e.g., language, theme).
  - **Security**: Update security settings (e.g., change password, 2FA).

## Components

The project is built using reusable components to ensure modularity and maintainability. Some key components include:

- **Card Components**: Display user information and payment transaction data.
- **Charts**: Line, Bar, and Pie charts using Chart.js to visualize data.
- **Forms**: Reusable form inputs and components for settings and profile management.
- **Sidebar**: A responsive sidebar for navigation.
- **Header**: A top navigation bar that includes icons for settings and notifications.
- **Tabs**: A tab-based navigation system for the settings page.

