# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React, and TypeScript, featuring a sleek glassmorphism design with smooth animations.

## Features

- 🚀 **Next.js 16** with App Router and Server Components
- 🎨 **Modern UI** with glassmorphism design and smooth animations
- 📱 **Fully Responsive** - works on all device sizes
- ⚡ **Fast Performance** with optimized images and caching
- 🔧 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling with custom configuration
- 📧 **Contact Form** with email functionality
- 🌙 **Dark/Light Mode** with theme switching
- 🔘 **Fluid Layouts** with dynamic responsiveness

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Theming**: next-themes
- **Email**: Nodemailer

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # Email Configuration
   EMAIL_HOST=your-smtp-server.com
   EMAIL_PORT=587
   EMAIL_USE_TLS=true
   EMAIL_HOST_USER=your-email@domain.com
   EMAIL_HOST_PASSWORD=your-app-password
   DEFAULT_FROM_EMAIL=your-email@domain.com

   # Personal Links (optional)
   NEXT_PUBLIC_EMAIL=your-email@domain.com
   NEXT_PUBLIC_LINKEDIN_URL=your-linkedin-url
   NEXT_PUBLIC_GITHUB_URL=your-github-url
   NEXT_PUBLIC_PHONE=your-phone-number
   NEXT_PUBLIC_ADDRESS=your-address
   NEXT_PUBLIC_PROFILE_IMAGE_URL=your-profile-image-url
   ```

4. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Environment Variables

The project uses several environment variables for configuration:

- `EMAIL_*` variables for contact form functionality
- `NEXT_PUBLIC_*` variables for personal information and links
- See `.env.local` example above

## Deployment

### Vercel

The easiest way to deploy this portfolio is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

### Netlify

This project is also compatible with Netlify deployment:
1. Connect your GitHub repository to Netlify
2. Set build command to `npm run build` or `bun run build`
3. Set publish directory to `out`

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/           # About page
│   ├── api/             # API routes (contact form)
│   └── ...              # Other pages
├── components/          # Reusable components
│   ├── glass/           # Glassmorphism components
│   ├── layout/          # Layout components
│   ├── sections/        # Portfolio sections
│   └── ui/              # UI components
├── config/              # Configuration files
├── lib/                 # Utility functions
├── styles/              # Global styles
└── types/               # TypeScript type definitions
data/
└── data.json            # Portfolio content data
```

## Customization

### Updating Portfolio Content

1. Modify `data/data.json` to update your portfolio information
2. The data is automatically loaded and cached (with 1-hour revalidation)
3. Modify `src/types/index.ts` if you add new data structures

### Styling

- Global styles are in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Color scheme and theme variables are defined in globals.css

## Contact Form

The contact form is fully functional and sends emails through the configured SMTP server. Make sure to set up the email environment variables for production use.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue in the repository.