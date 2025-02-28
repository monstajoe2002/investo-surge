
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Download, HelpCircle, LogOut, User, Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import LogoSVG from "@/assets/logo.svg";

export default function Profile() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    promotions: true,
    updates: true,
  });
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const saveProfile = () => {
    // Simulate API call
    setTimeout(() => {
      setProfileSaved(true);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      
      // Reset state after 3 seconds
      setTimeout(() => setProfileSaved(false), 3000);
    }, 1000);
  };
  
  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type],
    });
    
    toast({
      title: `${notifications[type] ? "Disabled" : "Enabled"} ${type} notifications`,
      description: `You've ${notifications[type] ? "disabled" : "enabled"} ${type} notifications.`,
    });
  };
  
  const handleLogout = () => {
    // Simulate logout
    toast({
      title: "Logging out",
      description: "You are being logged out of your account.",
    });
  };
  
  // Fade-in animation
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  // User data
  const userData = {
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    phone: "+1 (555) 123-4567",
    joined: "March 2022",
    totalInvestments: "$24,500",
    portfolioGrowth: "+12.4%",
  };
  
  return (
    <>
      <Navbar />
      <motion.div
        className="container max-w-5xl mx-auto pt-24 pb-16 px-4"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Profile</h1>
          <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="bg-primary/10 rounded-full p-2">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{userData.name}</CardTitle>
                <CardDescription>{userData.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Separator />
              <nav className="flex flex-col p-4 gap-2">
                <button className="flex items-center space-x-2 p-2 bg-primary/10 text-primary rounded-md">
                  <User size={18} />
                  <span>Personal Info</span>
                </button>
                <button className="flex items-center space-x-2 p-2 hover:bg-secondary rounded-md">
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                <button className="flex items-center space-x-2 p-2 hover:bg-secondary rounded-md">
                  <CreditCard size={18} />
                  <span>Payment Methods</span>
                </button>
                <button className="flex items-center space-x-2 p-2 hover:bg-secondary rounded-md">
                  <Download size={18} />
                  <span>Download Data</span>
                </button>
                <button className="flex items-center space-x-2 p-2 hover:bg-secondary rounded-md">
                  <HelpCircle size={18} />
                  <span>Help & Support</span>
                </button>
              </nav>
              <Separator />
              <div className="p-4">
                <Button 
                  variant="destructive" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={handleLogout}
                >
                  <LogOut size={18} />
                  <span>Log Out</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-6 grid grid-cols-2 w-full">
                <TabsTrigger value="profile">Profile Details</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <img src={LogoSVG} alt="Logo" width={80} height={80} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input 
                            id="password" 
                            type={passwordVisible ? "text" : "password"} 
                            defaultValue="••••••••••••" 
                          />
                          <button 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button 
                      onClick={saveProfile} 
                      disabled={profileSaved}
                    >
                      {profileSaved ? "Saved" : "Save Changes"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive activity updates via email</p>
                        </div>
                        <Switch 
                          checked={notifications.email} 
                          onCheckedChange={() => toggleNotification('email')} 
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                        </div>
                        <Switch 
                          checked={notifications.push} 
                          onCheckedChange={() => toggleNotification('push')} 
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">SMS Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive text messages for critical updates</p>
                        </div>
                        <Switch 
                          checked={notifications.sms} 
                          onCheckedChange={() => toggleNotification('sms')} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Communication Preferences</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Promotional Emails</h4>
                          <p className="text-sm text-muted-foreground">Receive emails about new features and special offers</p>
                        </div>
                        <Switch 
                          checked={notifications.promotions} 
                          onCheckedChange={() => toggleNotification('promotions')} 
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Product Updates</h4>
                          <p className="text-sm text-muted-foreground">Receive emails about product updates and changes</p>
                        </div>
                        <Switch 
                          checked={notifications.updates} 
                          onCheckedChange={() => toggleNotification('updates')} 
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button onClick={() => {
                      toast({
                        title: "Settings saved",
                        description: "Your notification preferences have been updated.",
                      });
                    }}>
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </>
  );
}
