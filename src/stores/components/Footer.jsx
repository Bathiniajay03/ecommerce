import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="text-sm">Designed and Developed by Bathini Ajay</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
          <a href="/support" className="text-blue-400 hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;