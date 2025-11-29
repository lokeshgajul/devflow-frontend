import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border border-t-[0.5px] border-gray-400 px-6 py-12 md:py-16 bg-[#f5f4f4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors text-gray-500 "
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors text-gray-500 "
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors text-gray-500 "
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 text-gray-500 ">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-[0.5px] border-gray-400 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="font-semibold text-foreground">DevFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 DevFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
