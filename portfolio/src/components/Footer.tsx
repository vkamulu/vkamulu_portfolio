import { ArrowUp } from "lucide-react";
import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} Varun Kamulu
        </p>

        <p className="footer-center">
          Built with React + TypeScript
        </p>

        <a href="#home" className="back-top">
          Back to top
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;