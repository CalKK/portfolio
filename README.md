# Calvin Kinyanjui Portfolio

[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](https://github.com/CalKK/portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg)](https://vitejs.dev/)

A modern, responsive portfolio website showcasing the professional journey, skills, and achievements of Calvin Kinyanjui, an aspiring Electrical & Electronics Engineer. Built with cutting-edge web technologies to deliver an exceptional user experience.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Portfolio**: Dynamic sections for Honors & Awards, Experience, Skills, Education, Certifications, and Projects
- **Smooth Animations**: Engaging CSS animations and transitions
- **Professional Layout**: Clean, modern design with intuitive navigation
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Live Demo

Visit the live portfolio at:([https://calvin-kinyanjui.netlify.app](https://calvinkinyanjui.netlify.app)

## 🛠️ Tech Stack

- **Frontend Framework**: Vanilla JavaScript with ES6+ features
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern CSS features
- **Fonts**: Google Fonts (Inter & JetBrains Mono)
- **Deployment**: Vercel
- **Version Control**: Git

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CalKK/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The development server will start at `http://localhost:5173` (default Vite port).

## 📖 Usage

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── main.js            # JavaScript functionality
├── style.css          # Main stylesheet
├── vercel.json        # Vercel deployment configuration
├── gallery/           # Portfolio images and documents
├── public/            # Static assets
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## ⚙️ Configuration

### Environment Variables

No environment variables are required for this static site.

### Deployment Configuration

The project includes a `vercel.json` file for Vercel deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Customization

To customize the portfolio:

1. **Personal Information**: Update content in `index.html`
2. **Styling**: Modify `style.css` for visual changes
3. **Functionality**: Edit `main.js` for interactive features
4. **Assets**: Replace images in the `gallery/` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Test changes locally before submitting
- Ensure responsive design works on all devices
- Add comments for complex logic
- Update this README if adding new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Development server not starting**
- Ensure Node.js version 16+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check if port 5173 is available

**Build failing**
- Run `npm run build` to check for errors
- Ensure all assets in `gallery/` are accessible
- Check console for specific error messages

**Styling issues**
- Clear browser cache
- Check CSS file paths in `index.html`
- Verify CSS syntax with a linter

**Images not loading**
- Ensure images are in the `gallery/` folder
- Check image paths in `index.html`
- Verify GitHub raw URLs are accessible

### Performance Optimization

- Run `npm run build` for production-ready optimized files
- Enable gzip compression on your hosting platform
- Optimize images before adding to the gallery

## 📞 Contact

Calvin Kinyanjui
- Email: calvinkinyanjui017@gmail.com
- Phone: +254 796 120248
- LinkedIn: [calvin-kinyanjui-95734222a](https://www.linkedin.com/in/calvin-kinyanjui-95734222a/)
- GitHub: [CalKK](https://github.com/CalKK)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons and emojis for visual enhancement
- Vercel for seamless deployment

---

⭐ If you find this project helpful, please give it a star on GitHub!
