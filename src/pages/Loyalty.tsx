
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Award, Crown, Gift, Star, Zap, ChevronRight, Tag, Filter, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Loyalty() {
  const [filter, setFilter] = useState("all");
  
  // User loyalty data
  const loyaltyData = {
    points: 3852,
    rank: "Gold",
    nextRank: "Platinum",
    pointsToNextRank: 1148,
    history: [
      { id: 1, date: "Aug 25, 2023", activity: "Coffee Purchase", points: +15 },
      { id: 2, date: "Aug 23, 2023", activity: "Monthly Bonus", points: +100 },
      { id: 3, date: "Aug 20, 2023", activity: "Movie Tickets", points: +45 },
      { id: 4, date: "Aug 15, 2023", activity: "Points Redemption", points: -200 },
      { id: 5, date: "Aug 12, 2023", activity: "Grocery Shopping", points: +50 },
      { id: 6, date: "Aug 05, 2023", activity: "Referral Bonus", points: +250 },
    ],
    availableRewards: [
      { id: 1, title: "Free Coffee", points: 150, category: "dining", partner: "Starbucks" },
      { id: 2, title: "Movie Ticket", points: 300, category: "entertainment", partner: "AMC Theatres" },
      { id: 3, title: "$10 Gift Card", points: 500, category: "shopping", partner: "Amazon" },
      { id: 4, title: "Airport Lounge Pass", points: 1000, category: "travel", partner: "Priority Pass" },
      { id: 5, title: "Premium Subscription", points: 1200, category: "entertainment", partner: "Spotify" },
      { id: 6, title: "Restaurant Discount", points: 400, category: "dining", partner: "Cheesecake Factory" },
    ]
  };
  
  // Membership tiers
  const membershipTiers = [
    { 
      tier: "Silver", 
      pointsRequired: 0, 
      benefits: ["Basic rewards", "Email support", "Monthly newsletter"],
      color: "bg-gray-300" 
    },
    { 
      tier: "Gold", 
      pointsRequired: 2500, 
      benefits: ["All Silver benefits", "Priority customer service", "Quarterly bonus points", "Special birthday rewards"],
      color: "bg-amber-400" 
    },
    { 
      tier: "Platinum", 
      pointsRequired: 5000, 
      benefits: ["All Gold benefits", "Exclusive event invitations", "Personal financial advisor", "Higher redemption rates", "Concierge service"],
      color: "bg-blue-500" 
    },
    { 
      tier: "Diamond", 
      pointsRequired: 10000, 
      benefits: ["All Platinum benefits", "First access to new features", "VIP customer support", "Annual luxury gifts", "Custom financial solutions"],
      color: "bg-violet-500" 
    }
  ];
  
  // Calculate progress to next tier
  const currentTierIndex = membershipTiers.findIndex(tier => tier.tier === loyaltyData.rank);
  const nextTier = membershipTiers[currentTierIndex + 1];
  const currentTier = membershipTiers[currentTierIndex];
  
  const calculateProgress = () => {
    if (!nextTier) return 100; // Max tier
    const pointsRange = nextTier.pointsRequired - currentTier.pointsRequired;
    const pointsEarned = loyaltyData.points - currentTier.pointsRequired;
    return Math.floor((pointsEarned / pointsRange) * 100);
  };
  
  const progressPercent = calculateProgress();
  
  // Filter rewards
  const filteredRewards = loyaltyData.availableRewards.filter(reward => {
    if (filter === "all") return true;
    return reward.category === filter;
  });
  
  const redeemReward = (rewardId: number, points: number) => {
    if (loyaltyData.points >= points) {
      toast.success("Reward redeemed successfully", {
        description: `You have redeemed a reward for ${points} points.`
      });
    } else {
      toast.error("Not enough points", {
        description: `You need ${points - loyaltyData.points} more points to redeem this reward.`
      });
    }
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
              <span className="chip mb-2 inline-block">Loyalty Program</span>
              <h1 className="text-2xl font-bold font-display">Your Rewards</h1>
            </div>
          </motion.div>
          
          {/* Points Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-xl text-primary-foreground p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {loyaltyData.rank === "Silver" && <Award className="h-8 w-8" />}
                {loyaltyData.rank === "Gold" && <Crown className="h-8 w-8" />}
                {loyaltyData.rank === "Platinum" && <Star className="h-8 w-8" />}
                {loyaltyData.rank === "Diamond" && <Zap className="h-8 w-8" />}
                <div>
                  <p className="text-sm opacity-90">Current Tier</p>
                  <h2 className="text-xl font-bold">{loyaltyData.rank} Member</h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Available Points</p>
                <h2 className="text-2xl font-bold">{loyaltyData.points}</h2>
              </div>
            </div>
            
            {nextTier && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{currentTier.tier} Tier</span>
                  <span>{nextTier.tier} Tier ({loyaltyData.pointsToNextRank} points to go)</span>
                </div>
                <Progress value={progressPercent} className="h-2 bg-white/20" />
              </div>
            )}
          </motion.div>
        </section>
        
        <Tabs defaultValue="rewards" className="mb-8">
          <TabsList className="mb-6 grid grid-cols-3 w-full">
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="history">Points History</TabsTrigger>
            <TabsTrigger value="tiers">Membership Tiers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rewards">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Available Rewards</h2>
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <select 
                  className="bg-secondary/50 rounded-md text-sm p-1 border-none focus:ring-1 focus:ring-primary" 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="dining">Dining</option>
                  <option value="shopping">Shopping</option>
                  <option value="travel">Travel</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRewards.map((reward) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * reward.id }}
                  className="bg-card border border-border rounded-xl p-4 card-hover"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{reward.title}</h3>
                      <p className="text-sm text-muted-foreground">Partner: {reward.partner}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      <Star size={12} />
                      {reward.points} pts
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-2"
                    onClick={() => redeemReward(reward.id, reward.points)}
                  >
                    Redeem Reward
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="bg-card border border-border rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Points History</h2>
              <div className="space-y-4">
                {loyaltyData.history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium">{item.activity}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <span className={cn(
                      "font-medium",
                      item.points > 0 ? "text-green-600" : "text-red-600"
                    )}>
                      {item.points > 0 ? `+${item.points}` : item.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tiers">
            <div className="space-y-6">
              {membershipTiers.map((tier, index) => (
                <motion.div 
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={cn(
                    "bg-card border border-border rounded-xl p-4 relative overflow-hidden",
                    loyaltyData.rank === tier.tier && "ring-2 ring-primary"
                  )}
                >
                  <div className={cn(
                    "absolute top-0 right-0 h-16 w-16 -rotate-45 -translate-y-8 translate-x-8",
                    tier.color
                  )} />
                  
                  <div className="flex items-start justify-between">
                    <div className="mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{tier.tier} Tier</h3>
                        {loyaltyData.rank === tier.tier && (
                          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Current</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tier.pointsRequired.toLocaleString()} points required
                      </p>
                    </div>
                    
                    {loyaltyData.rank === tier.tier && (
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Crown size={18} className="text-primary" />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </motion.div>
  );
}
