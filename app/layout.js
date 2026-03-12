import './globals.css';
export const metadata = {
  title: 'Vivek MG | Embedded AI & IoT Developer',
  description:
    'Portfolio of Vivek MG — CSE student at SRMIST specializing in Embedded AI, IoT, and Full Stack Development. Samsung R&D intern. Alexa Developers SRM Creatives Head.',
  keywords: [
    'Vivek MG', 'Embedded AI', 'IoT', 'Arduino', 'TensorFlow Lite', 'Full Stack',
    'SRMIST', 'Samsung RnD', 'portfolio', 'Next.js',
  ],
  authors: [{ name: 'Vivek MG', url: 'https://github.com/WiiWake3101' }],
  openGraph: {
    type: 'website',
    title: 'Vivek MG | Embedded AI & IoT Developer',
    description:
      'CSE student at SRMIST • Samsung R&D intern • Embedded AI, IoT & Full Stack projects.',
    images: [
      {
        url: '/IMG_1487.PNG',
        width: 800,
        height: 800,
        alt: 'Vivek MG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek MG | Embedded AI & IoT Developer',
    description:
      'CSE student at SRMIST • Samsung R&D intern • Embedded AI, IoT & Full Stack projects.',
    images: ['/IMG_1487.PNG'],
  },
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