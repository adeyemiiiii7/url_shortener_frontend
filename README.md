# LinkSnip - URL Shortener Frontend

## 📋 Project Overview

LinkSnip is a modern, user-friendly URL shortening service built with React and Vite. It allows users to convert long, unwieldy URLs into short, manageable links that are easy to share across platforms.

![LinkSnip](https://url-shortener-na4u.onrender.com/logo.png)

## ✨ Features

- **Instant URL Shortening**: Convert long URLs to short links with a single click
- **Copy to Clipboard**: Easily copy shortened URLs with a convenient copy button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Input Validation**: Ensures valid URLs are submitted
- **Loading States**: Visual feedback during API operations
- **Error Handling**: Clear error messages for troubleshooting

## 🛠️ Technology Stack

- **Frontend**:
  - React 19
  - React Router 7
  - Tailwind CSS 4
  - Axios for API requests
  - Vite for build tooling

- **Backend Integration**:
  - RESTful API built with TypeScript
  - Environment-based configuration
  - Production and development environments

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url_shortener_frontend.git
   cd url_shortener_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Create a `.env.development` file for local development
   - Set `VITE_API_BASE_URL` to your backend API URL

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed.

## 🌐 Deployment

The application is configured for deployment on Render.com using the `render.yaml` configuration file.

Current deployment: [https://url-shortener-na4u.onrender.com](https://url-shortener-na4u.onrender.com)

## 📝 Project Structure

```
urlshortner_frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── Header.jsx   # App header with theme toggle
│   │   ├── Footer.jsx   # App footer
│   │   ├── UrlShortenerForm.jsx  # Main URL shortening form
│   │   └── RedirectHandler.jsx   # Handles URL redirects
│   ├── services/
│   │   └── api.js       # API integration service
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles (Tailwind)
│   └── main.jsx         # Application entry point
├── .env.development     # Development environment variables
├── .env.production      # Production environment variables
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
