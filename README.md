# Linktree Clone

A full-stack Linktree-inspired web application built with Next.js, TypeScript, Tailwind CSS, MongoDB, and OAuth authentication.

The application allows users to create a personalized profile page, add social media links, upload a profile image, and share all their links through a single profile URL.

## Features

- Google and GitHub OAuth authentication
- User registration and login
- Secure authenticated user sessions
- Custom username/handle
- Create and manage personal Linktree-style profiles
- Add multiple social media and external links
- Add a profile image
- Add a custom bio
- Dynamic public profile URLs
- MongoDB database integration
- Responsive design
- Protected authenticated pages
- Clean and modern UI

## Tech Stack

- **Next.js** - Full-stack React framework
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Responsive and utility-first styling
- **MongoDB** - Database for storing users, profiles, and links
- **OAuth** - Authentication using Google and GitHub
- **React** - Frontend user interface
- **Node.js** - Server-side runtime

## Authentication

The application uses OAuth authentication, allowing users to sign in using:

- Google
- GitHub

After authentication, users can access their personalized dashboard and manage their profile and links.

## How It Works

1. A user visits the application.
2. The user signs in using Google or GitHub.
3. After authentication, the user can claim a unique username.
4. The user adds their social media or external links.
5. The user can add a profile image and bio.
6. The application stores the profile information in MongoDB.
7. A public profile page is generated using the user's username.
8. Visitors can open the profile and access all the user's links from one place.
