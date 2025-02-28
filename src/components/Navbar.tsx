
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  TrendingUp, 
  User, 
  Menu, 
  X,
  Search
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navItems = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <Home size={20} />
    },
    {
      name: "Advisor",
      path: "/advisor",
      icon: <TrendingUp size={20} />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />
    }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-primary font-display"
          >
            LoyalPay
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`px-4 py-2 rounded-lg flex items-center space-x-1 transition-all duration-200 ${
                isActive(item.path) 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-secondary"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <button className="button-icon ml-2 text-muted-foreground">
            <Search size={20} />
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden button-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 md:hidden"
          >
            <nav className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                    isActive(item.path) 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-secondary"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-10 input-field"
                  />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
