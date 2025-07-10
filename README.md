## SAYC Website

A responsive, modern, and lightweight web app built for Students Advocating for Young Children (SAYC) to help recruit new students and familes. The website includes a program schedule, application information, and a contact form for interested students or families.

## Built With

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5 & CSS3
- Node.js + npm (for local dev setup)

## Features

- Built with Vite + React for speed and flexibility
- Organized folder structure for easy collaboration
- Static content powered by JSON files (can swap with Supabase or CMS)
- Modular components for reuse across the site
- Ready for hosting on GitHub Pages, Vercel, or Netlify
- Easily scalable with dynamic routing, user auth, and databases

## Folder Structure

SAYC/
├── public/ # Static assets (favicon, meta tags)
├── src/
│ ├── assets/ # Logos, icons, images
│ ├── components/ # Reusable layout/UI components
│ ├── data/ # Static data files 
│ ├── pages/ # Route-based views 
│ └── App.jsx # Main router setup
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/SAYC.git
cd SAYC
```

2. Install dependencies
 
```bash
npm install
```

3. Run the development server

```bash 

npm run dev
```
Visit http://localhost:5173 to view the app in your browser.

Customization Guide
Task	File or Folder
Update scholar bios	src/data/scholars.json
Edit school/program info	src/data/schools.json
Change colors, fonts, logo	src/assets/, index.css
Replace favicon	public/favicon.svg
Modify layout/navigation	src/components/

Deployment
Vercel
Push to GitHub

Go to https://vercel.com, import the repo

Vercel auto-deploys on every push

Future Development Ideas
Add Supabase for login and dynamic data

Build an admin dashboard for internal management

Use a CMS like Sanity or Strapi to manage content

License
MIT — open for educational and nonprofit use.
For other use cases, please contact the author.

