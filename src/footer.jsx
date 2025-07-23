function Footer() {
  return (
<footer className="bg-[#0e2e2e] text-white py-6 mt-14 px-4 overflow-x-hidden w-full">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full overflow-x-hidden">
    
    {/* Contact Info */}
    <div className="text-sm text-center md:text-left space-y-1">
      <p>Ayesha Kousar</p>
      <a href="mailto:ayeshakousar.work@gmail.com" className="hover:underline">
        ayeshakousar.work@gmail.com
      </a>
    </div>

    {/* Links */}
    <div className="flex space-x-6 items-center flex-wrap justify-center">
      <a href="https://github.com/ayeshakousar-work" target="_blank" rel="noopener noreferrer" className="hover:underline">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/ayesha-kousar-/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        LinkedIn
      </a>
      <a
  href="/Ayesha Kousar CV.pdf"
  download
  className="bg-white text-[#0e2e2e] px-3 py-1 rounded hover:bg-gray-200 text-sm font-medium"
>
  Get Resume
</a>

    </div>
  </div>
</footer>
  );
}
export default Footer;