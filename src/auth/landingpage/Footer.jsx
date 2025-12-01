import React from "react";
import { FaCode } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "AI Assistant", path: "/ai-assistant" },
      { name: "API", path: "/api" },
    ],
    Community: [
      { name: "Questions", path: "/questions" },
      { name: "Categories", path: "/categories" },
      { name: "Leaderboard", path: "/leaderboard" },
      { name: "Events", path: "/events" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    Legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Guidelines", path: "/guidelines" },
      { name: "Cookies", path: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: RiTwitterXFill, href: "https://twitter.com", label: "Twitter" },
    { icon: SlSocialLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: CiMail, href: "mailto:hello@devflow.com", label: "Email" },
  ];

  return (
    <footer className=" border-t border-gray-800 ">
      <div className=" px-6 sm:px-10 lg:px-16 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <FaCode size={20} className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevFlow</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Empowering developers to learn, share, and grow together.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
