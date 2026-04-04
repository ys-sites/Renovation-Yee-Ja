# Renovation Yee Ja

A professional, production-ready business website for a home renovation company.

## Overview

This project is built using a modern React stack, optimized for performance and easy deployment. It features a responsive design, clean architecture, and a professional aesthetic tailored for the home renovation industry.

### Tech Stack
- **Framework:** React 19 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript

## Local Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy the `.env.example` file to `.env.local` (if you add any custom environment variables in the future).
   ```bash
   cp .env.example .env.local
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## Deployment to Vercel

This project is fully configured for zero-configuration deployment to Vercel.

1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect that this is a Vite project.
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Handling Client-Side Routing on Vercel
Since this is a Single Page Application (SPA) using React Router, Vercel needs to rewrite all requests to `index.html`. 
Create a `vercel.json` file in the root of your project with the following content:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Project Structure

- `/src/components/` - Reusable UI components (Navbar, Footer, HeroSection, etc.)
- `/src/pages/` - Page components corresponding to routes (Home, Services, About, Contact)
- `/src/lib/` - Utility functions
- `/src/App.tsx` - Main application component with routing setup
- `/src/index.css` - Global styles and Tailwind configuration

## Contact Form

The contact form currently uses a `mailto:` fallback to open the user's default email client, as this is a static export without a backend. To integrate a real email service (like Resend or Nodemailer), you would need to set up a backend API route or use a service like Formspree or EmailJS.
