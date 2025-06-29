import './globals.css';
export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        minHeight: '100vh',
        margin: 0,
        background: 'linear-gradient(to right, #000428, #004e92)',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}