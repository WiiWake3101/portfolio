'use client';

export default function Footer() {
  return (
    <footer className="mb-10 bg-white/10 backdrop-blur-lg border-t border-white/20 text-white py-6 px-4 sm:px-6 lg:px-20 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Vivek M G. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Wiiwake3101" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/vm4512" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="mailto:vivekmg31@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
