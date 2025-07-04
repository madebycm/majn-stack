# majn-stack

Modern web app starter with Next.js, Auth.js, tRPC, and Prisma.

## Project Structure

```
/app                → Next.js pages and UI components
  /api              → HTTP endpoints (required by Next.js)
    /auth           → NextAuth HTTP handler
    /trpc           → tRPC HTTP handler
  /_components      → Components used by pages
  
/backend            → Your application logic
  /api              → tRPC routers and procedures
  /auth             → Authentication configuration
  /db.ts            → Database connection

/components         → Shared UI components
/lib                → Utility functions
/prisma             → Database schema and migrations
/public             → Static files (images, fonts, etc.)
/styles             → Global CSS
/trpc               → tRPC client configuration
```

## Key Concepts

- **`/backend`** - All your business logic. Never exposed to the web directly.
- **`/app/api`** - HTTP "doors" that Next.js uses to receive web requests. Usually thin wrappers.
- **`/app`** - Your actual web pages and their components.

## Quick Start

```bash
# Install dependencies
npm install

# Set up database
npx prisma db push

# Run development server
npm run dev
```

## Authentication

Default credentials: `dev` / `123`

## Tech Stack

- **Next.js 15** - React framework
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Database ORM
- **NextAuth** - Authentication
- **Tailwind CSS** - Styling
- **Motion** - Animations
- **Motion Primitives** - Beautiful animated components

## Motion Primitives

Pre-built animated components for a polished UI.

### Install a component

```bash
# List available components
npx motion-primitives list

# Add a specific component
npx motion-primitives add text-shimmer
```

### Usage example

```tsx
import { TextEffect } from '@/components/motion-primitives/text-effect';

export function Hero() {
  return (
    <TextEffect per="char" preset="fade">
      Welcome to majn-stack
    </TextEffect>
  );
}
```

Components are added to `/components/motion-primitives/`.