# Theme Documentation: Gamezone Theme

## Overview
The Gamezone Theme is a modern, feature-rich React-based theme designed specifically for game platforms. Built with React 18 and Tailwind CSS, it offers a responsive, high-performance interface that includes dark and light modes, 250+ HTML5 games, and essential pages for a professional game website.

## Features
1. **React 18**: Utilizes the latest React features for better performance and scalability.
2. **Tailwind CSS**: Ensures a sleek and responsive design.
3. **React Router**: Provides seamless navigation between pages.
4. **Dark and Light Modes**: Users can toggle between dark and light themes for enhanced user experience.
5. **Game Library**: Includes 250+ HTML5 games.
6. **Essential Pages**:
   - About Us
   - Contact Us
   - Privacy Policy
   - Terms of Service
   - DMCA
7. **Game Categorization**: Games are organized by categories and tags for easy navigation.
8. **Game Preview**: Each game features an optimized preview section.
9. **Social Media Integration**: Includes links to popular social media platforms.

## Installation
### Prerequisites
- Node.js (v16 or above)
- NPM or Yarn

### Steps
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
/src
├── components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── GameCard.js
│   ├── CategoryList.js
├── pages
│   ├── Home.js
│   ├── AboutUs.js
│   ├── ContactUs.js
│   ├── PrivacyPolicy.js
│   ├── TermsOfService.js
│   ├── DMCA.js
├── utils
│   ├── themeToggle.js
│   ├── api.js
│   ├── categories.js
└── App.js
```

## Features in Detail
### 1. Dark and Light Modes
Toggle the theme by clicking the sun/moon icon in the top-right corner. This is powered by Tailwind CSS's theme-switching capabilities.

```javascript
import { useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};
```

### 2. Game Categories and Tags
Games are grouped into categories like Action, Puzzle, Racing, etc. Each category page dynamically fetches games and displays them.

```javascript
const categories = ['Action', 'Puzzle', 'Racing', 'Adventure'];

const CategoryList = () => (
  <ul>
    {categories.map((category) => (
      <li key={category}>
        <a href={`/category/${category.toLowerCase()}`}>{category}</a>
      </li>
    ))}
  </ul>
);
```

### 3. Social Media Links
Add your platform's social media links in the footer.

```javascript
const socialLinks = [
  { platform: 'Facebook', url: 'https://facebook.com/yourpage' },
  { platform: 'Twitter', url: 'https://twitter.com/yourpage' },
];

const Footer = () => (
  <footer>
    {socialLinks.map(({ platform, url }) => (
      <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
        {platform}
      </a>
    ))}
  </footer>
);
```

## Essential Pages

## Project Structure
```
/src

├── pages
│   ├── Home.js
│   ├── AboutUs.js
│   ├── ContactUs.js
│   ├── PrivacyPolicy.js
│   ├── TermsOfService.js
│   ├── DMCA.js
└── App.js
```

### 1. About Us
A brief description of your platform's vision and goals.

### 2. Contact Us
A form for users to reach out for inquiries or support.

### 3. Privacy Policy
Details about how user data is collected and handled.

### 4. Terms of Service
The rules users agree to when using the platform.

### 5. DMCA
Instructions on how to report copyright violations.

## Game Preview
Each game has a dedicated preview section displaying the title, description, and a playable iframe.

```javascript
const GamePreview = ({ game }) => (
  <div className="game-preview">
    <h1>{game.title}</h1>
    <iframe src={game.url} title={game.title}></iframe>
    <p>{game.description}</p>
  </div>
);
```

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `build` folder to your hosting provider.

## Demo
View the live demo: [Gamezone Theme](https://Gamezone.org/)
