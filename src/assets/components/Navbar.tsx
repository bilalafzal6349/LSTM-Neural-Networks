import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 w-full z-50 border-b border-border/40 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <div className="mr-6 flex">
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              LSTM Word Predictor
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-purple-400">
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-purple-400"
            >
              Presentation
            </Link>
            <Link
              to="/documentation"
              className="transition-colors hover:text-purple-400"
            >
              Documentation
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-purple-400"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/word-predictor">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
