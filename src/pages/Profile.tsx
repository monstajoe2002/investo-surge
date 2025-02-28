
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { 
  User, 
  Settings, 
  Bell, 
  CreditCard, 
  Shield, 
  LogOut, 
  ChevronRight,
  Edit,
  Mail,
  Phone,
  Lock,
  CheckSquare,
  HelpCircle,
  Star
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => navigate("/login"), 1000);
  };
  
  const handleNotificationToggle = (setting: string) => {
    toast.success(`${setting} notifications ${notificationSettings[setting] ? 'disabled' : 'enabled'}`);
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const [notificationSettings, setNotificationSettings] = useState({
    "New features": true,
    "Investment opportunities": true,
    "Security alerts": true,
    "Transaction reports": false,
    "Market updates": false
  });
  
  const tabContent = {
    account: (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-2xl">
                  A
                </div>
                <button className="absolute bottom-0 right-0 p-1 bg-primary rounded-full text-white">
                  <Edit size={14} />
                </button>
              </div>
              
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-1 font-display">Alex Johnson</h2>
                <p className="text-muted-foreground">Premium Account Member</p>
                <div className="flex items-center gap-2 mt-2">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <Star size={16} className="text-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground">Premium Level</span>
                </div>
              </div>
              
              <button className="button-outline">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="border-t border-border px-6 py-4 bg-secondary/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p className="font-medium">alex.johnson@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Lock size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Password</p>
                  <p className="font-medium">••••••••••</p>
                </div>
                <button className="ml-auto button-icon">
                  <Edit size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4328</p>
                  <p className="text-sm text-muted-foreground">Expires 09/2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded mr-3">Default</span>
                <button className="button-icon">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <CreditCard size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Mastercard ending in 8712</p>
                  <p className="text-sm text-muted-foreground">Expires 05/2024</p>
                </div>
              </div>
              <button className="button-icon">
                <ChevronRight size={16} />
              </button>
            </div>
            
            <button className="button-outline w-full">
              <CreditCard size={16} className="mr-2" />
              Add Payment Method
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              <h3 className="text-lg font-semibold">Security</h3>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Protected</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <Fingerprint size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Biometric Authentication</p>
                  <p className="text-sm text-muted-foreground">Face ID and fingerprint unlock</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Enabled</span>
                <button className="button-icon">
                  <Settings size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <Lock size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Additional security for your account</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">Disabled</span>
                <button className="button-icon">
                  <Settings size={16} />
                </button>
              </div>
            </div>
            
            <button className="button-outline w-full">
              <Shield size={16} className="mr-2" />
              Security Settings
            </button>
          </div>
        </motion.div>
      </div>
    ),
    
    notifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
        
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([setting, enabled], idx) => (
            <div 
              key={setting} 
              className="flex items-center justify-between p-3 border border-border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${enabled ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                  <Bell size={18} />
                </div>
                <p className="font-medium">{setting}</p>
              </div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={enabled}
                  onChange={() => handleNotificationToggle(setting)}
                />
                <div className="w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
        
        <div className="mt-6 border-t border-border pt-4">
          <button className="button-outline w-full flex items-center justify-center gap-2">
            <Bell size={16} />
            <span>Update All Preferences</span>
          </button>
        </div>
      </motion.div>
    ),
    
    help: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h4 className="font-medium">How are AI investment recommendations generated?</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our AI analyzes your spending patterns, financial goals, risk tolerance, and market conditions to provide personalized investment recommendations tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h4 className="font-medium">How secure is my financial data?</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We implement bank-level security measures including end-to-end encryption, two-factor authentication, and biometric verification to ensure your data is always protected.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h4 className="font-medium">How do I earn loyalty points?</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    You earn points through regular card usage, completing financial goals, and participating in partner promotions. Points can be redeemed for rewards or exclusive partner offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="button-outline w-full">
              <HelpCircle size={16} className="mr-2" />
              Contact Support
            </button>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
            <p className="text-muted-foreground mb-4">Our support team is available 24/7</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="button-primary">Chat with Support</button>
              <button className="button-outline">Email Support</button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      <main className="pt-20 pb-28 page-container">
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4"
          >
            <div>
              <span className="chip mb-2 inline-block">Profile</span>
              <h1 className="text-2xl font-bold font-display">Account Settings</h1>
            </div>
            
            <button 
              onClick={handleLogout}
              className="button-outline flex items-center gap-2 text-red-600 hover:bg-red-50 hover:border-red-200"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </motion.div>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-1"
          >
            <nav className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-2">
                <button
                  onClick={() => setActiveTab("account")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === "account" 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-secondary"
                  }`}
                >
                  <User size={18} />
                  <span>Account</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === "notifications" 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-secondary"
                  }`}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("help")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === "help" 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-secondary"
                  }`}
                >
                  <HelpCircle size={18} />
                  <span>Help & Support</span>
                </button>
              </div>
              
              <div className="p-4 mt-2 border-t border-border bg-secondary/30">
                <div className="rounded-lg p-4 bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <CheckSquare size={18} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Premium Account</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        You have access to all premium features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </motion.aside>
          
          <div className="md:col-span-3">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </main>
    </motion.div>
  );
}

// Need to add this global TypeScript declaration to fix the import
declare global {
  interface Window {
    Fingerprint: any;
  }
}

const Fingerprint = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
    <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
    <path d="M8 15a18 18 0 0 0 1.8 6"></path>
    <path d="M4.9 19a22 22 0 0 1-.9-7v-1a8 8 0 0 1 12-7"></path>
  </svg>
);
