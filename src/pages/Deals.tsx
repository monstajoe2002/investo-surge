
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Tag, Calendar, MapPin, ExternalLink, Star, Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Deals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Mock data for deals
  const dealsData = [
    {
      id: 1,
      title: "50% Off Premium Coffee",
      description: "Get 50% off any premium coffee purchase over $10",
      partner: "Starbucks",
      category: "dining",
      discount: "50%",
      validUntil: "Sep 30, 2023",
      location: "All locations",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=500&h=300",
      featured: true
    },
    {
      id: 2,
      title: "Free Movie Ticket",
      description: "Buy one movie ticket, get one free on weekdays",
      partner: "AMC Theatres",
      category: "entertainment",
      discount: "BOGO",
      validUntil: "Oct 15, 2023",
      location: "Select theaters",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      id: 3,
      title: "20% Off Entire Purchase",
      description: "Exclusive discount for LoyalPay members on any purchase",
      partner: "Nike",
      category: "shopping",
      discount: "20%",
      validUntil: "Sep 25, 2023",
      location: "Online and in-store",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=500&h=300",
      featured: true
    },
    {
      id: 4,
      title: "$50 Off First Stay",
      description: "Enjoy $50 off your first hotel booking",
      partner: "Marriott Hotels",
      category: "travel",
      discount: "$50",
      validUntil: "Dec 31, 2023",
      location: "Worldwide",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      id: 5,
      title: "Free Dessert with Meal",
      description: "Complimentary dessert with purchase of any entree",
      partner: "Cheesecake Factory",
      category: "dining",
      discount: "Freebie",
      validUntil: "Oct 10, 2023",
      location: "All restaurants",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      id: 6,
      title: "3 Months Free Premium",
      description: "Get 3 months of premium membership at no cost",
      partner: "Spotify",
      category: "entertainment",
      discount: "100% for 3 months",
      validUntil: "Nov 15, 2023",
      location: "Online only",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500&h=300"
    },
  ];
  
  // Categories
  const categories = [
    { id: "all", name: "All Deals" },
    { id: "dining", name: "Dining" },
    { id: "shopping", name: "Shopping" },
    { id: "travel", name: "Travel" },
    { id: "entertainment", name: "Entertainment" },
  ];
  
  // Filter and search deals
  const filteredDeals = dealsData.filter(deal => {
    const matchesCategory = activeCategory === "all" || deal.category === activeCategory;
    const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         deal.partner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Featured deals
  const featuredDeals = dealsData.filter(deal => deal.featured);
  
  const claimDeal = (dealId: number) => {
    toast.success("Deal claimed successfully", {
      description: "This deal has been added to your wallet."
    });
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
              <span className="chip mb-2 inline-block">Exclusive Offers</span>
              <h1 className="text-2xl font-bold font-display">Deals & Partnerships</h1>
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="search"
                placeholder="Search deals..."
                className="pl-10 pr-4 py-2 bg-secondary/50 rounded-lg border-0 focus:ring-2 focus:ring-primary/20 w-full md:w-60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
          
          {/* Featured Deals */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Featured Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredDeals.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden card-hover"
                >
                  <div className="aspect-video relative">
                    <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="backdrop-blur-md bg-black/50 text-white">
                        {deal.discount} OFF
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="backdrop-blur-md bg-primary/80 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{deal.title}</h3>
                        <p className="text-sm text-muted-foreground">Partner: {deal.partner}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{deal.description}</p>
                    
                    <div className="flex flex-col space-y-2 mb-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        Valid until {deal.validUntil}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin size={14} className="mr-1" />
                        {deal.location}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-2"
                      onClick={() => claimDeal(deal.id)}
                    >
                      Claim Deal
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Deals with Category Tabs */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Browse All Deals</h2>
          </div>
          
          <div className="mb-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm whitespace-nowrap",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 hover:bg-secondary"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {filteredDeals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeals.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (deal.id % 3) }}
                  className="bg-card border border-border rounded-xl overflow-hidden card-hover"
                >
                  <div className="aspect-[3/2] relative">
                    <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="backdrop-blur-md bg-black/50 text-white">
                        {deal.discount} OFF
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{deal.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Partner: {deal.partner}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-secondary/50">
                        {categories.find(c => c.id === deal.category)?.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Valid until {deal.validUntil}
                      </span>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => claimDeal(deal.id)}
                    >
                      Claim Deal
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card border border-border rounded-xl">
              <Tag className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">No deals found</h3>
              <p className="text-muted-foreground">Try changing your search or filter criteria</p>
            </div>
          )}
        </section>
      </main>
    </motion.div>
  );
}
