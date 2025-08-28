import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById("root")!).render(<App />);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}