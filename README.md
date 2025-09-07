# Resume Scroll

## Project Overview

Resume Scroll is a personal website project built to achieve multiple goals:

- Serve as a creative playground for learning and experimentation
- Present myself professionally in my authentic voice
- Showcase my career history and professional experience
- Provide visitors with contact information and connection methods
- Create a platform for publishing and sharing thoughts consistently

The project combines modern web development practices with personal expression, allowing for both technical growth and professional presentation.

## Architecture

### Tech Stack

- **Framework**: [Next.js 14.2.16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest) for server state
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for UI animations
- **Icons**: [Lucide React](https://lucide.dev/) for iconography

### Design Pattern

The project follows the [Atomic Design](https://atomicdesign.bradfrost.com/) methodology for component organization:

- `/atoms` - Basic building blocks (buttons, inputs, etc.)
- `/molecules` - Groups of atoms functioning together
- `/organisms` - Complex UI components like the timeline
- `/templates` - Page layouts like MainLayout

### Route Structure

- `/` - Landing page that redirects to `/me`
- `/me` - Personal information page
- `/career` - Career timeline with interactive elements
- `/intro` - Embedded video introduction

### External Services

- **Xano**: Backend API for timeline data
- **SendGrid**: Email integration for contact forms
- **Google Tag Manager**: Analytics tracking (Container ID: GTM-WT7N6P3M)
- **Netlify**: Hosting and continuous deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Airruk/resume-scroll.git
   cd resume-scroll
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your own values

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the application

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_XANO_API_URL`: URL for the Xano API
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container ID
- `SENDGRID_API_KEY`: API key for SendGrid email service

## Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Set environment variables in Netlify dashboard

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is currently unlicensed. Please contact the owner for permission before reusing any code.

---

Built with ❤️ by Eric Doster
