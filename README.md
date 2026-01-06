# Pixelmotive - Solo Web Development Agency Website

A modern, high-performance website for Pixelmotive, a solo web development agency specializing in custom websites, UI/UX design, and digital solutions.

## Features

- **Modern Design**: Clean, professional design with 3D animations and smooth interactions
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Fast Performance**: Optimized for speed and SEO
- **Contact Form**: Working contact form that sends emails to pixlemotive@gmail.com
- **Smooth Scrolling**: Seamless navigation with smooth scroll animations
- **Dark/Light Mode**: Professional contrast with dark and light themes

## Tech Stack

- **Frontend**: Next.js 16, React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes with SendGrid
- **Email**: SendGrid for secure email delivery

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Gmail account for email functionality

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```

   **Setup SendGrid:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create an API key in Settings > API Keys
   - Verify your sender email (pixlemotive@gmail.com) in Settings > Sender Authentication

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project can be deployed to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm start
```

Make sure to set the environment variables in your deployment platform.

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── WhyChooseUs.tsx
│   ├── HireUs.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
```

## Contact

- **Email**: pixlemotive@gmail.com
- **Instagram**: [@pixlemotive](https://www.instagram.com/pixlemotive)

## License

This project is private and proprietary to Pixelmotive.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
