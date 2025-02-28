
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Gift, 
  Home, 
  Menu, 
  Settings, 
  User,
  Wallet,
  Tag,
  X
} from "lucide-react";
import Navbar from "./Navbar";

export default function NavbarExtended() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      label: "AI Advisor",
      href: "/advisor",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      label: "Loyalty",
      href: "/loyalty",
      icon: <Gift className="w-5 h-5" />,
    },
    {
      label: "Deals",
      href: "/deals",
      icon: <Tag className="w-5 h-5" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Original Navbar for layout structure */}
      <Navbar />
      
      {/* Overlay our own navigation links in the same position */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold font-display">
                <span className="text-primary">Loyal</span>Pay
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-background p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-sm font-medium",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
