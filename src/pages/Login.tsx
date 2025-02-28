
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Fingerprint, Mail, Lock, User, ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";
import { toast } from "sonner";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset fields when toggling
    setEmail("");
    setUsername("");
    setPassword("");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password || (!isLogin && !username)) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (isLogin) {
      // In a real app, this would be an API call
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      // In a real app, this would be an API call
      toast.success("Account created successfully");
      setTimeout(() => navigate("/dashboard"), 1000);
    }
  };
  
  const handleBiometricLogin = () => {
    toast.info("Biometric authentication in progress...");
    setTimeout(() => {
      toast.success("Biometric authentication successful");
      navigate("/dashboard");
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-background p-4"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="InvestoSurge Logo" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold font-display">
            {isLogin ? "Welcome back" : "Create an account"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {isLogin ? "Sign in to access your account" : "Join InvestoSurge to start investing smarter"}
          </p>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card shadow-sm border border-border rounded-2xl p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-muted-foreground" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field w-full pl-10"
                    placeholder="johndoe"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-muted-foreground" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field w-full pl-10"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-muted-foreground" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field w-full pl-10 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-muted-foreground" />
                  ) : (
                    <Eye size={18} className="text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            
            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary hover:underline">
                  Forgot password?
                </button>
              </div>
            )}
            
            <button type="submit" className="button-primary w-full flex items-center justify-center gap-2">
              <span>{isLogin ? "Sign in" : "Create account"}</span>
              <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-6 relative flex items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-muted-foreground text-sm">or</span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          <div className="mt-6">
            <button 
              onClick={handleBiometricLogin}
              className="button-outline w-full flex items-center justify-center gap-2"
            >
              <Fingerprint size={18} />
              <span>Sign in with Biometrics</span>
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                type="button" 
                onClick={toggleForm} 
                className="ml-1 text-primary hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
