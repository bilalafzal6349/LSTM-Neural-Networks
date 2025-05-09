import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../components/ui/drawer";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Presentation" },
    { to: "/documentation", label: "Documentation" },
    { to: "/contact", label: "Contact" },
  ];

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="relative px-3 py-2 transition-colors hover:text-purple-400 group"
        >
          <span className="relative z-10">{link.label}</span>
          <span className="absolute inset-0 bg-white/10 rounded-md scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-purple-900/90 to-blue-900/90 border-b border-white/10 shadow-lg transform transition-all duration-700 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              LSTM Word Predictor
            </span>
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <Link to="/word-predictor" className="mr-2">
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Try It
              </Button>
            </Link>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-1 border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh] bg-gradient-to-b from-purple-900 to-blue-900 border-t-white/20">
                <div className="flex flex-col items-center justify-start pt-10 pb-6">
                  <div className="flex flex-col space-y-6 text-lg font-medium w-full px-8">
                    {navLinks.map((link) => (
                      <DrawerClose key={link.to} asChild>
                        <Link
                          to={link.to}
                          className="py-3 px-4 hover:bg-white/10 rounded-md transition-all duration-300 flex items-center justify-center transform hover:translate-x-2"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </DrawerClose>
                    ))}
                    <div className="flex justify-center mt-4 pt-6 border-t border-white/20">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          window.open(
                            "https://github.com/bilalafzal6349/LSTM-Neural-Networks",
                            "_blank"
                          )
                        }
                        className="mr-2 border-white/20 bg-white/10 hover:bg-white/20"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <DrawerClose asChild>
                        <Button
                          variant="outline"
                          onClick={() => setIsDrawerOpen(false)}
                          className="border-white/20 bg-white/10 hover:bg-white/20"
                        >
                          <X className="h-4 w-4 mr-2" /> Close
                        </Button>
                      </DrawerClose>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1 text-sm font-medium">
              {renderNavLinks()}
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/word-predictor">
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20">
                  Get Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://github.com/bilalafzal6349/LSTM-Neural-Networks",
                    "_blank"
                  )
                }
                className="border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
