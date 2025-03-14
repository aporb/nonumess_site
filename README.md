# NoNuMess Home Organization Services

![Astro](https://img.shields.io/badge/Astro-5.4.3-orange.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)
![EmailJS](https://img.shields.io/badge/EmailJS-3.2.0-green.svg)

A professional landing page for NoNuMess, a home organization service based in Los Angeles, CA. This site showcases services, before/after transformations, client testimonials, and includes a contact form powered by EmailJS.

## 📋 Project Overview

This project is a responsive, modern landing page for NoNuMess Home Organization Services. It's built with Astro, a modern static site builder that delivers excellent performance with minimal JavaScript. The site features:

- Responsive design that works on all devices
- Dark/light theme toggle
- Image gallery with before/after transformations
- Client testimonials
- Service descriptions
- FAQ section
- Contact form with EmailJS integration (no backend required)
- Privacy Policy and Terms & Conditions pages

## 🚀 Installation

### Prerequisites

- Node.js (v16.x or higher)
- npm (v7.x or higher)

### Step-by-Step Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nonumess-website.git
   cd nonumess-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## ⚙️ Configuration

### EmailJS Setup

The contact form uses EmailJS for sending emails without a backend. To configure it:

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Set up an email service and template as described in `src/components/EmailJSSetupInstructions.md`
3. Update the following values in `src/components/Booking.astro`:
   ```javascript
   // Replace these with your actual EmailJS credentials
   const USER_ID = "YOUR_USER_ID";
   const SERVICE_ID = "YOUR_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   ```

### Site Configuration

Basic site configuration is stored in `config.json`. You can modify:

- Company information
- Contact details
- Social media links
- Service offerings
- FAQ items

```json
{
  "companyName": "NoNuMess",
  "phone": "310-382-0360",
  "email": "info@nonumess.com",
  "instagram": "@nonumess",
  "services": [
    {
      "title": "Home Organization",
      "description": "..."
    },
    // More services...
  ]
}
```

## 🖥️ Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Customizing Content

#### Modifying Services

Edit the services in `src/components/Services.astro`:

```astro
<div class="service">
  <h3>Home Organization</h3>
  <p>Transform cluttered spaces into functional, beautiful areas that enhance your daily life.</p>
</div>
```

#### Updating Gallery Images

Replace images in the `public/images` directory and update references in `src/components/Gallery.astro`:

```astro
<div class="before-after">
  <img src="/images/before-after-1.jpg" alt="Before and after transformation of a kitchen pantry" />
  <div class="caption">Kitchen Pantry Transformation</div>
</div>
```

#### Adding Testimonials

Modify testimonials in `src/components/Testimonials.astro`:

```astro
<div class="testimonial">
  <div class="quote">"Working with NoNuMess completely transformed my home office. I can finally find everything!"</div>
  <div class="author">- Sarah T., Los Angeles</div>
</div>
```

## 📦 Deployment

### Building for Production

```bash
npm run build
```

This generates static files in the `dist/` directory that can be deployed to any static hosting service.

### Deploying to Dreamhost

See the detailed instructions in `dreamhost-deployment-guide.md` for deploying to Dreamhost shared hosting.

Key points:
- Build the site locally
- Upload the contents of the `dist` directory to your hosting
- No server-side dependencies needed (EmailJS works client-side)

## 🔍 Troubleshooting

### Common Issues

#### Form Not Sending Emails
- Check browser console for JavaScript errors
- Verify EmailJS credentials are correctly set
- Ensure your EmailJS account is active and within usage limits

#### Images Not Loading
- Verify file paths are correct
- Check that images exist in the `public/images` directory
- Ensure file names match exactly (case-sensitive)

#### Dark Mode Toggle Not Working
- Check for JavaScript console errors
- Verify the theme toggle script is loading properly
- Clear browser cache and cookies

### TypeScript Errors

If you encounter TypeScript errors during development:

```bash
# Check for TypeScript issues
npx tsc --noEmit
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits and Acknowledgments

- Built with [Astro](https://astro.build)
- Email functionality by [EmailJS](https://www.emailjs.com/)
- Fonts from [Google Fonts](https://fonts.google.com/) via Fontsource
- Icons from [Font Awesome](https://fontawesome.com/)
- Special thanks to NoNuMess for the opportunity to create this website

## 📞 Contact Information

For questions about the website or services:
- Phone: 310-382-0360
- Email: info@nonumess.com
- Instagram: [@nonumess](https://instagram.com/nonumess)
