# Style Decor

A full-stack, role-based Decoration Service Booking Website where users can book any type of decoration service, make online payments via Stripe, admins can assign decorators, and decorators can update & complete services step-by-step.

## Live Links

Client Live URL: https://style-decor-3caba.web.app/

## Project Purpose

The goal of this project is to build a real-world service marketplace system for decoration services (home, wedding, office, events, etc.) that:

● Eliminates offline booking hassle

● Manages decorators efficiently

● Provides transparent booking & payment tracking

● Ensures smooth admin → decorator → user workflow

## How the System Works

### User Flow

1. User browses decoration services
2. Selects a service & booking date
3. Makes payment using Stripe
4. Booking status updates in dashboard
5. Receives service completion confirmation

### Admin Flow

1. View all bookings
2. Check payment status
3. Assign decorator for paid bookings
4. Monitor revenue & analytics

### Decorator Flow

1. View assigned services
2. Update service status step-by-step
3. Mark service as completed
4. Track earnings

## Key Features

### Public Features

● Service listing with search & filter

● Service details page

● Animated Hero section (Framer Motion)

● Service coverage map (React Leaflet)

### Admin Dashboard

1. Manage Services (CRUD)
2. Manage Decorators (CRUD)
3. Assign Decorators
4. Revenue Monitoring
5. Analytics Charts
6. Approve / Disable Decorators

### Decorator Dashboard

1. Assigned Projects
2. Today's Schedule
3. Update Project Status
4. Earnings Summary

## Authentication & Authorization

1. Email & Password login
1. Social Login supported
1. JWT-based authentication
1. Role-based protected routes:
   1. admin
   2. Decorator
   3. User

## Payment System

1. Stripe Payment Gateway
2. Secure payment intent
3. Transaction stored in database
4. Payment history available in dashboard

## Tech Stack

1. React

2. React Router DOM
3. Tailwind CSS
4. DaisyUI
5. Framer Motion
6. React Hook Form
7. TanStack Query
8. Axios
9. React Leaflet

## Backend

1. Node.js
2. Express.js
3. MongoDB
4. JWT Authentication
5. Stripe

## Tools & Services

1. Firebase Authentication
2. ImageBB (Image Upload)
3. Vercel / Netlify (Client)

## dependencies

```
 "dependencies": {
    "@headlessui/react": "^2.2.9",
    "@smastrom/react-rating": "^1.5.0",
    "@tailwindcss/vite": "^4.1.17",
    "@tanstack/react-query": "^5.90.12",
    "axios": "^1.13.2",
    "clsx": "^2.1.1",
    "daisyui": "^5.5.8",
    "date-fns": "^4.1.0",
    "firebase": "^12.6.0",
    "framer-motion": "^12.23.25",
    "hamburger-react": "^2.5.2",
    "lucide": "^0.556.0",
    "lucide-react": "^0.556.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.68.0",
    "react-icons": "^5.5.0",
    "react-leaflet": "^5.0.0",
    "react-rating": "^2.0.5",
    "react-router": "^7.10.1",
    "react-toastify": "^11.0.5",
    "recharts": "^3.5.1",
    "sweetalert2": "^11.26.4",
    "swiper": "^12.0.3",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.17"
  },
   "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.2.4"
  }
```

## Environment Variables

### Client (.env)

```
VITE_apiKey=*************************
VITE_authDomain=*************************
VITE_projectId=*************************
VITE_storageBucket=*************************
VITE_messagingSenderId=*************************
VITE_appId=*************************
VITE_IMGBB_key=*************************
```

### Server (.env)

```
DB_USER=*************************
DB_PASSWORD=*************************
STRIPE_SECRET_KEY=*************************
DOMAIN_URL=*************************
FB_SERVICE_KEY=*************************
```

## Admin Credentials (For Testing)

```
Email: labib@gmail.com
Password: 123456
```

## GitHub Repositories

Server Repo: https://github.com/oiiemon9/style-decor-server

## Conclusion

This project demonstrates a complete real-world service booking system with secure payments, role-based dashboards, and smooth workflow management. It is scalable, modern, and production-ready.
