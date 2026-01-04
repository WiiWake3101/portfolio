import './globals.css';
export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen m-0 bg-gradient-to-r from-[#000428] to-[#004e92] text-white font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}